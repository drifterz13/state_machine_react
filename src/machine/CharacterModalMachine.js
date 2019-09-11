import { Machine, send } from "xstate";

export const characterModalMachine = Machine({
  id: "character_modal",
  initial: "close",
  states: {
    open: {
      on: { TOGGLE: "close" },
      initial: "knight",
      states: {
        knight: {
          on: { SWITCH_CHAR: "wise" },
          initial: "select_character",
          states: {
            select_character: {
              on: { SWITCH: "select_weapon" }
            },
            select_weapon: {
              on: { SWITCH: "select_character" },
              initial: "hold",
              states: {
                hold: {
                  on: {
                    SUBMIT: {
                      target: "final",
                      actions: send("TOGGLE", { to: "close" })
                    }
                  }
                },
                final: {
                  type: "final"
                }
              }
            }
          }
        },
        wise: {
          on: { SWITCH_CHAR: "knight" },
          initial: "select_character",
          states: {
            select_character: {
              on: { SWITCH: "select_weapon" }
            },
            select_weapon: {
              on: { SWITCH: "select_character" },
              initial: "hold",
              states: {
                hold: {
                  on: { SUBMIT: "final" }
                },
                final: {}
              }
            }
          }
        }
      }
    },
    close: {
      on: { TOGGLE: "open" }
    }
  }
});
