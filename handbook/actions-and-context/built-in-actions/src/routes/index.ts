import { actions, assign, createMachine, send } from "xstate";

const keyboardShortcutMachine = createMachine({
  on: {
    PRESS_COPY_BUTTON: {
      actions: [send({ type: "COPY" })],
    },
    PRESS_CTRL_C: {
      actions: [send({ type: "COPY" })],
    },
    COPY: {
      actions: ["copyToClipboard"],
    },
  },
});

const { pure } = actions;

const machine = createMachine({
  context: {
    runBothActions: false,
  },
  entry: pure((context) => {
    if (context.runBothActions) {
      return ["action1", "action2"];
    }
    return ["action1"];
  }),
});

const assignResult = assign((context, event) => ({
  newValue: true,
}));

console.log(assignResult.type);
console.log(assignResult.assigner);
