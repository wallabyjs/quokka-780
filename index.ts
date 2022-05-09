({
  env: {
    params: {
      runner: "--experimental-specifier-resolution=node",
    },
  },
});

import { hello } from "./dep";

const greeting = await hello("Nikita");

console.log(greeting);
