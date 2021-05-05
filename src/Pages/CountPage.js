import { useReducer } from "react";
import ContextStore from "../Store/Context/ContextStore";
import CountComponent from "../Components/Count/CountComponent";
import { CountReducer } from "../Store/Reducer/Count/CountReducer";

export default function CountPage() {
  const initialState = { count: 0 };
  const [click_count, clickCountDispatch] = useReducer(CountReducer, initialState);

  const ContextValue = {
    click_count,
    clickCountDispatch,
  };

  return (
    <ContextStore.Provider value={ContextValue}>
      <div>
        In Count Component: {click_count.count}
        <CountComponent count_value={ContextStore} />
      </div>
    </ContextStore.Provider>
  );
}
