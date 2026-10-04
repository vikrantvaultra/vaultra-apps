import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseRecordedLine, splitRecording, cleanProductUrl } from '../src/lib/store.js';

test('english with k suffix and store', () => {
  const d = parseRecordedLine('iPhone 15 128GB under 65k on Flipkart');
  assert.equal(d.site, 'flipkart');
  assert.equal(d.maxPrice, 65000);
  assert.equal(d.query, 'iPhone 15 128GB');
  assert.equal(d.quantity, 1);
});

test('hinglish: amount tak, store se, pieces', () => {
  const d = parseRecordedLine('boat airdopes 141 1200 tak amazon se 2 piece');
  assert.equal(d.site, 'amazon');
  assert.equal(d.maxPrice, 1200);
  assert.equal(d.quantity, 2);
  assert.equal(d.query, 'boat airdopes 141');
});

test('product link with max', () => {
  const d = parseRecordedLine('https://www.amazon.in/Some-Thing/dp/b0chx1w1xy/ref=sr_1_1?keywords=x max 999');
  assert.equal(d.mode, 'url');
  assert.equal(d.url, 'https://www.amazon.in/dp/B0CHX1W1XY');
  assert.equal(d.maxPrice, 999);
});

test('default store and rupee symbol', () => {
  const d = parseRecordedLine('mujhe Samsung 55 inch TV chahiye below ₹42,999', 'flipkart');
  assert.equal(d.site, 'flipkart');
  assert.equal(d.maxPrice, 42999);
  assert.equal(d.query, 'Samsung 55 inch TV');
});

test('lakh', () => {
  assert.equal(parseRecordedLine('macbook air m3 under 1.1 lakh').maxPrice, 110000);
});

test('no price stays null (never auto-pays)', () => {
  assert.equal(parseRecordedLine('pigeon kettle on amazon').maxPrice, null);
});

test('splits a spoken list', () => {
  assert.deepEqual(splitRecording('iphone under 60k aur airpods under 15k\nkettle'), ['iphone under 60k', 'airpods under 15k', 'kettle']);
});

test('flipkart url keeps pid only', () => {
  assert.equal(
    cleanProductUrl('https://www.flipkart.com/apple-iphone-15/p/itm6ac6485515ae4?pid=MOBGTAGPTB3VS24W&lid=x&marketplace=FLIPKART'),
    'https://www.flipkart.com/apple-iphone-15/p/itm6ac6485515ae4?pid=MOBGTAGPTB3VS24W',
  );
});
