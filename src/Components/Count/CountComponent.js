import { useContext } from "react";
import ContextStore from "../../Store/Context/ContextStore";

export default function CountComponent() {
  const resultContext = useContext(ContextStore);

  return (
    <>
      <button onClick={() => resultContext.clickCountDispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => resultContext.clickCountDispatch({ type: "INCREMENT" })}>+</button>
    </>
  );
}
