import { useReducer } from "react";

import ContextStore from "../Utils/Context/ContextStore";
import CountComponent from "../Components/Count/CountComponent";
import CountReducer from "../Store/Reducer/CountReducer";

const initialState = { count: 0 };

export default function CountPage() {
  const [state, dispatch] = useReducer(CountReducer, initialState);

  const ContextValue = {
    state,
    dispatch,
  };

  return (
    <ContextStore.Provider value={ContextValue}>
      Count: {state.count}
      <CountComponent count_value={ContextStore}/>
    </ContextStore.Provider>
  );
}
