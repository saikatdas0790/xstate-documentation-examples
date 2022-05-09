import { createMachine } from "xstate";

const pedestrianStates = {
  initial: "walk",
  states: {
    walk: {
      on: {
        PED_TIMER: "wait",
      },
    },
    wait: {
      on: {
        PED_TIMER: "stop",
      },
    },
    stop: {},
  },
};

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
      ...pedestrianStates,
    },
  },
});

const currentState = "yellow";

const nextState = lightMachine.transition(currentState, "TIMER").value;
console.log(nextState);

console.log(lightMachine.transition("red.walk", "PED_TIMER").value);

const waitState = lightMachine.transition({ red: "walk" }, "PED_TIMER").value;
console.log(waitState);

console.log(lightMachine.transition(waitState, "PED_TIMER").value);
console.log(lightMachine.transition({ red: "stop" }, "TIMER").value);
