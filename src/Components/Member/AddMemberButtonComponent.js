import { useContext } from 'react'
import ContextStore from '../../Store/Context/ContextStore'

export default function CheckButton() {
  const resultContext = useContext(ContextStore)
  const random_number = Math.random()
  return (
    <>
      <button
        onClick={() =>
          resultContext.showMember([
            ...resultContext.member_list,
            random_number,
          ])
        }
      >
        Add Member
      </button>
    </>
  )
}
