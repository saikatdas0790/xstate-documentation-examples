import { createMachine, interpret } from "xstate";

const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: {
        TOGGLE: {
          target: "active",
        },
      },
    },
    active: {
      on: {
        TOGGLE: {
          target: "inactive",
        },
      },
    },
  },
});

const toggleService = interpret(toggleMachine)
  .onTransition((state) => console.log(state.value))
  .start();

toggleService.send("TOGGLE");

toggleService.send("TOGGLE");
