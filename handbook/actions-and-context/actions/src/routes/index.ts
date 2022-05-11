import { createMachine } from "xstate";

const machine = createMachine(
  {
    initial: "visiting",
    states: {
      visiting: {
        entry: "sayHello",
        exit: "sayGoodbye",
        on: {
          LEAVE: {
            target: "notVisiting",
          },
        },
      },
      notVisiting: {},
    },
  },
  {
    actions: {
      sayHello: () => {
        console.log("Hello");
      },
      sayGoodbye: () => {
        console.log("Goodbye");
      },
    },
  }
);

const machine2 = createMachine(
  {
    initial: "toggledOn",
    states: {
      toggledOn: {
        on: {
          TOGGLE: {
            target: "toggledOff",
            actions: ["sayToggled"],
          },
        },
      },
      toggledOff: {
        on: {
          TOGGLE: {
            target: "toggledOn",
            actions: ["sayToggled"],
          },
        },
      },
    },
  },
  {
    actions: {
      sayToggled: () => {
        console.log("Toggled");
      },
    },
  }
);

const machine3 = createMachine(
  {
    entry: ["youSayGoodbye", "iSayHello"],
  },
  {
    actions: {
      iSayHello: () => {
        console.log("Me: Hello");
      },
      youSayGoodbye: () => {
        console.log("You: Goodbye");
      },
    },
  }
);

const machine4 = createMachine(
  {
    initial: "begging",
    states: {
      begging: {
        on: {
          "gets treat": {
            actions: "makeHappySnufflingSound",
          },
        },
      },
    },
  },
  {
    actions: {
      makeHappySnufflingSound: () => {
        console.log("Snuffle snuffle snuffle");
      },
    },
  }
);
