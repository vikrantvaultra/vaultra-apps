import { test } from 'node:test';
import assert from 'node:assert/strict';
await import('../src/content/common.js');
const J = globalThis.SaleSniper;

const rows = [
  { title: 'Apple iPhone 15 (128 GB) - Black', price: 61999, href: 'sponsored', sponsored: true },
  { title: 'Apple iPhone 15 Plus (128 GB) - Blue', price: 70999, href: 'plus' },
  { title: 'Apple iPhone 15 (256 GB) - Pink', price: 71999, href: '256' },
  { title: 'Apple iPhone 15 (128 GB) - Blue', price: 62999, href: 'right' },
];

test('picks first organic exact match within budget', () => {
  assert.equal(J.pickResult('iphone 15 128gb', 65000, rows).href, 'right');
});

test('skips results over max price', () => {
  assert.equal(J.pickResult('iphone 15 128gb', 60000, rows), null);
});

test('every word must be present', () => {
  assert.equal(J.pickResult('iphone 15 plus 128 gb', 0, rows).href, 'plus');
  assert.equal(J.pickResult('iphone 16', 0, rows), null);
});

test('price parsing', () => {
  assert.equal(J.parsePrice('₹1,29,900.00'), 129900);
  assert.equal(J.parsePrice('Rs. 499'), 499);
  assert.equal(J.parsePrice('abc'), null);
  assert.deepEqual(J.allRupees('Items: ₹1,000 Delivery: ₹40 Order Total: ₹1,040'), [1000, 40, 1040]);
});
