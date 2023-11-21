export default defineEventHandler(async (event) => {
  return {
    status: "up",
    db: Boolean(await useDb("roles")),
  };
});
