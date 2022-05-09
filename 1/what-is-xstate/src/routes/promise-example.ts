import { createMachine, interpret, assign } from "xstate";

const fetchMachine = createMachine({
  id: "Dog API",
  initial: "idle",
  context: {
    dog: null,
  },
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    loading: {
      invoke: {
        id: "fetchDog",
        src: (context, event) =>
          fetch("https://dog.ceo/api/breeds/image/random").then((data) =>
            data.json(),
          ),
        onDone: {
          target: "resolved",
          actions: assign({
            dog: (_, event) => event.data,
          }),
        },
        onError: "rejected",
      },
      on: {
        CANCEL: "idle",
      },
    },
    resolved: {
      type: "final",
    },
    rejected: {
      on: {
        FETCH: "loading",
      },
    },
  },
});

const dogService = interpret(fetchMachine)
  .onTransition((state) => console.log(state.value))
  .start();

dogService.send("FETCH");
