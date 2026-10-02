export const inr = (n: number) => "₹" + Math.abs(Math.round(n)).toLocaleString("en-IN");
export const signed = (n: number) => (n < 0 ? "−" : n > 0 ? "+" : "") + inr(n);
export const pctOff = (p: number, m: number) => Math.round((1 - p / m) * 100);
