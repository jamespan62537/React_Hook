import { useReducer } from "react";

import ContextStore from "../Utils/Context/ContextStore";
import CountComponent from "../Components/Count/CountComponent";
import { ReducerStore } from "../Store/ReducerStore";

const initState = ReducerStore();

export default function CountPage() {
  const [state, dispatch] = useReducer(ReducerStore, initState);

  const ContextValue = {
    state,
    dispatch,
  };

  return (
    <ContextStore.Provider value={ContextValue}>
      <div>
        In Count Component: {state.CountReducer.count}
        <CountComponent count_value={ContextStore} />
      </div>
    </ContextStore.Provider>
  );
}
