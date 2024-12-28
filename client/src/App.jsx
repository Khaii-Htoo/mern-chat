
import { useEffect } from "react"
import ChatRoom from "./components/ChatRoom"
import Sidebar from "./components/Sidebar"
import { useStore } from "./store"

const App = () => {
    const { authUser} = useStore()
    useEffect(() => {
      console.log(authUser,'hehe')
    })
  return (
   <div className=" w-full h-screen flex  items-center">
     <Sidebar/>
     <ChatRoom/>
   </div>
  )
}

export default App