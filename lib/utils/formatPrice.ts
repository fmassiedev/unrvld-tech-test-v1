export function formatPrice(price: { amount: string; currencyCode: string }) {
  return parseFloat(price.amount).toLocaleString("en-US", {
    style: "currency",
    currency: price.currencyCode || "USD",
  });
}
