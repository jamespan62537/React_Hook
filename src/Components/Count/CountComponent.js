import React from "react";
import ContextStore from "../../Utils/Context/ContextStore";

export default function CountComponent() {
  let resultContext = React.useContext(ContextStore);

  return (
    <>
      <button onClick={() => resultContext.dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => resultContext.dispatch({ type: "INCREMENT" })}>+</button>
    </>
  );
}
