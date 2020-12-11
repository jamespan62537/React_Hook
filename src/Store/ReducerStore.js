import { CombineReducer } from "../Support/CombineReducer";

import { CountReducer } from "./Count/CountReducer";

const ReducerStore = CombineReducer({
  CountReducer,
});

export { ReducerStore };
