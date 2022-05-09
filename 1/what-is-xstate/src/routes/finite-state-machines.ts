import { createMachine } from "xstate";

const lightMachine = createMachine({
  id: "light",
  initial: "green",
  states: {
    green: {
      on: {
        TIMER: "yellow",
      },
    },
    yellow: {
      on: {
        TIMER: "red",
      },
    },
    red: {
      on: {
        TIMER: "green",
      },
    },
  },
});

const currentState = "green";

const nextState = lightMachine.transition(currentState, "TIMER").value;

console.log(nextState);
