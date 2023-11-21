export function up(knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();

      table.string("firstName");
      table.string("lastName");
      table.string("username");
      table.string("email");
      table.integer("createdBy").unsigned();
      table.integer("customerOf").unsigned();

      table.timestamps(true, true, true);
    })
    .createTable("categories", (table) => {
      table.increments();
      table.integer("userId").unsigned();
      table.integer("parentId").unsigned();

      table.string("name").notNullable();
      table.text("description");
      table.integer("lft");
      table.integer("rgt");
      table.integer("lvl");

      table.timestamps(true, true, true);
    })
    .createTable("products", (table) => {
      table.increments();
      table.integer("userId").unsigned();
      table.integer("parentId").unsigned();
      table.integer("categoryId").unsigned();
      table.integer("attributeSetId").unsigned();

      table.string("slug");
      table.boolean("status").default(false);

      table.timestamps(true, true, true);
    });
}

export function down(knex) {
  return knex.schema
    .dropTable("users")
    .dropTable("categories")
    .dropTable("products");
}
