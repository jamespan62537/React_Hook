import React from "react";
import ContextStore from "../Utils/Context/ContextStore";
import CheckButton from "./CheckButton";


export default function MemberListComponent() {
  const resultContext = React.useContext(ContextStore);
  return (
    <>
      <div>member list</div>
      <React.Fragment>
        {resultContext.member_list.map((member) => (
          <div key={member}>{member}</div>
        ))}

        <CheckButton></CheckButton>
      </React.Fragment>
    </>
  );
}
