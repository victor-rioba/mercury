export default defineEventHandler(async (event) => {
  const users = await useDb("users");
  return { users };
});
