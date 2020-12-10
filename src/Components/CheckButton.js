import React from "react";
import ContextStore from "../Utils/Context/ContextStore";

export default function CheckButton() {
    let resultContext = React.useContext(ContextStore);
    let a = Math.random();
    return <>
        <button onClick={() => resultContext.showMember([...resultContext.member_list, a])}>Add Member</button>
    </>;
}