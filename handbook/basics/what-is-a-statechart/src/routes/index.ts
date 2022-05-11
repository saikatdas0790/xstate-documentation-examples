import { createMachine } from "xstate";

const machine = createMachine({
  initial: "asleep",
  states: {
    asleep: {
      on: {
        "wakes up": {
          target: "awake",
        },
      },
    },
    awake: {
      on: {
        "falls asleep": {
          target: "asleep",
        },
      },
    },
  },
});

const VALID_EVENTS = [
  {
    type: "LOG_OUT",
  },
  {
    type: "LOG_IN",
    username: "myusername",
  },
  {
    type: "wake up",
  },
];
