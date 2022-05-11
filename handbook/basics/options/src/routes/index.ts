import { createMachine } from "xstate";

const helloMachine = createMachine(
  {
    entry: ["sayHello"],
  },
  {
    actions: {
      sayHello: () => {
        console.log("Hello!");
      },
    },
    services: {},
    guards: {},
    delays: {},
  }
);
