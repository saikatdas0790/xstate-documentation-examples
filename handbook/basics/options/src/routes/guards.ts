import { createMachine } from "xstate";

let iAmHappyAndIKnowIt = true;

const machine = createMachine(
  {
    initial: "notClappingHands",
    states: {
      notClappingHands: {
        on: {
          HEAR_MUSIC: {
            cond: "ifYoureHappyAndYouKnowIt",
            target: "clappingHands",
          },
        },
      },
      clappingHands: {},
    },
  },
  {
    guards: {
      ifYoureHappyAndYouKnowIt: () => iAmHappyAndIKnowIt,
    },
  }
);
