import { createMachine } from "xstate";

const machine = createMachine({
  schema: {
    events: {} as
      | { type: "LOG_OUT" }
      | { type: "LOG_IN"; value: string }
      | { type: "COUNTDOWN"; value: number },
  },
});
