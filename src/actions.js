import * as actions from "./actionsTypes";

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});

export const bugRemoved = (description) => ({
  type: actions.BUG_REMOVED,
  payload: {
    description,
  },
});

// function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "BUG_1",
//     },
//   };
// }
