import ChatRoom from "./components/ChatRoom"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
   <div className=" w-full h-screen flex  items-center">
     <Sidebar/>
     <ChatRoom/>
   </div>
  )
}

export default App