export default defineEventHandler(async (event) => {
  const products = await useDb("products").select();
  return { products };
});
