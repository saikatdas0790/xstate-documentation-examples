import { createMachine } from "xstate";

const paymentMachine = createMachine({
  id: "payment",
  initial: "method",
  states: {
    method: {
      initial: "cash",
      states: {
        cash: {
          on: {
            SWITCH_CHECK: "check",
          },
        },
        check: {
          on: {
            SWITCH_CASH: "cash",
          },
        },
        hist: {
          type: "history",
        },
      },
      on: {
        NEXT: "review",
      },
    },
    review: {
      on: {
        PREVIOUS: "method.hist",
      },
    },
  },
});

const checkState = paymentMachine.transition("method.cash", "SWITCH_CHECK");
console.log(checkState);

const reviewState = paymentMachine.transition(checkState, "NEXT");
console.log(reviewState);

const previousState = paymentMachine.transition(reviewState, "PREVIOUS").value;
console.log(previousState);
