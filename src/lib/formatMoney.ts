export function formatDop(amount: number): string {
  const rounded = Math.round(amount);
  const withDots = rounded
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `DOP ${withDots}`;
}
