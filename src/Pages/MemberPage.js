import { useState, useEffect } from 'react'

import ContextStore from '../Store/Context/ContextStore'
import MemberListComponent from '../Components/Member/MemberListComponent'

export default function MemberPage() {
  const [member_list, showMember] = useState(['Jack', 'John', 'james', 'tom'])

  useEffect(() => {
    showMember(member_list)
  }, [member_list])

  const ContextValue = {
    member_list,
    showMember,
  }

  return (
    <ContextStore.Provider value={ContextValue}>
      <MemberListComponent member_value={ContextStore} />
    </ContextStore.Provider>
  )
}
