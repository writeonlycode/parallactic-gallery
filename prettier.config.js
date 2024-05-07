/** @type {import("prettier").Config} */
const config = {
  printWidth: 120,

  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
};

module.exports = config;
