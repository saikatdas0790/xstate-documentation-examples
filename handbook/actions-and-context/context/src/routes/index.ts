import { assign, createMachine } from "xstate";

const machine = createMachine(
  {
    schema: {
      context: {} as { count: number; message: string },
      events: {} as { type: "INCREMENT"; value: number },
    },
    context: {
      count: 0,
      message: "",
    },
    on: {
      INCREMENT: {
        actions: ["assignToContext"],
      },
    },
  },
  {
    actions: {
      assignToContext: assign({
        count: (context, event) => context.count + event.value,
        message: "Count changed",
      }),
    },
  }
);

const machine2 = createMachine(
  {
    context: {
      count: 0,
    },
    on: {
      INCREMENT: {
        actions: ["assignToContext"],
      },
    },
  },
  {
    actions: {
      assignToContext: assign((context) => {
        return {
          count: context.count + 1,
          message: "Count changed",
        };
      }),
    },
  }
);

const machine3 = createMachine(
  {
    context: {
      count: 0,
    },
    on: {
      LOG_COUNT: {
        actions: ["logCountToConsole"],
      },
    },
  },
  {
    actions: {
      logCountToConsole: (context, event) => {
        console.log(`Count is ${context.count}`);

        console.log(event.type);
      },
    },
  }
);

const lightMachine = createMachine({
  schema: {
    context: {} as { value: number },
  },
});
