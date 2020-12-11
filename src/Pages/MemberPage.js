import { useState, useEffect } from "react";

import ContextStore from "../Utils/Context/ContextStore";
import MemberListComponent from "../Components/Member/MemberListComponent";
import { reducers } from "../Store/ReducerStore";

export default function MemberPage() {
  // 建立 state member_list 並給予初始值
  // 當我們要更新 member_list 可呼叫 showMember function
  const [member_list, showMember] = useState(["Jack", "John", "james", "tom"]);

  // 當 member_list 有變動時再重新渲染，提高渲染效能
  useEffect(() => {
    showMember(member_list);
  }, [member_list]);

  const ContextValue = {
    member_list,
    showMember,
  };

  return (
    <>
      {/* 可參考 https://zh-hant.reactjs.org/docs/context.html#reactcreatecontext */}
      {/* 當子元件調動該 Context 物件，他將會自動向父層查找最近的 Provider */}
      <ContextStore.Provider value={ContextValue}>
        <MemberListComponent member_value={ContextStore} />
      </ContextStore.Provider>
    </>
  );
}
