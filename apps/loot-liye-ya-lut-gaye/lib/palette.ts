// "Product photo" backdrops for the sale cards — picked by product name so a product always looks the same.
const SHOTS: [string, string][] = [
  ["#FF7AA8", "#B8164E"],
  ["#FFB547", "#E2531F"],
  ["#B794FF", "#5B2BD6"],
  ["#7CF5C8", "#0E8F7A"],
  ["#FFE15C", "#E8862A"],
  ["#FF8FD2", "#8E2BC2"],
  ["#9FE8FF", "#3B5BDB"],
  ["#D7FF6B", "#3D9A2B"],
];

export function shotFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return SHOTS[h % SHOTS.length];
}
