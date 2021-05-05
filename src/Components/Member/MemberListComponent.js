import React from 'react'
import ContextStore from '../../Store/Context/ContextStore'
import AddMemberButtonComponent from './AddMemberButtonComponent'

export default function MemberListComponent() {
  const resultContext = React.useContext(ContextStore)

  return (
    <>
      <div>member list</div>
      {resultContext.member_list.map((member) => (
        <div key={member}>{member}</div>
      ))}

      <AddMemberButtonComponent />
    </>
  )
}
