const { monorepoNCUconfig, rejectDependencies } = require("@melv1c/toolchain");

/** @type {import("npm-check-updates").RcOptions} */
module.exports = {
  ...monorepoNCUconfig,
  reject: rejectDependencies([
    { name: "recharts", reason: "Shadcn components doesn't support it" },
  ]),
};
