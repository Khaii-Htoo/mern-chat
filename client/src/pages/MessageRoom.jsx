import {
  ChevronLeft,
  Image,
  Mic,
  PhoneCall,
  Search,
  SendHorizontal,
  Smile,
  Video,
} from "lucide-react";

const MessageRoom = () => {
 
  return (
    <section className=" w-full  h-screen bg-color">
      <nav className=" p-2 py-2 h-[7%]  ">
        <div className=" flex items-center justify-between">
         <div className=" flex items-center space-x-3 text-white">
         <ChevronLeft onClick={()=> window.history.back()} size={25} color="white" />
         <div className="flex items-center space-x-3">
            <img
              className="size-8 rounded-full"
              src="https://i.pinimg.com/736x/1b/d5/7e/1bd57e70fd4973d6287e3bab2cdc44b8.jpg"
            />
            <div>
              <h2 className="text-white">John Doe</h2>
              <p className="text-white text-xs">Active Now</p>
            </div>
          </div>
         </div>
          <div className=" flex items-center space-x-3 text-white">
            <PhoneCall size={20} className=" cursor-pointer " />
            <Video size={20} className=" cursor-pointer " />
            <Search size={20} className=" cursor-pointer " />
          </div>
        </div>
      </nav>
      <div className=" h-[93%] rounded-t-2xl bg-indigo-100 relative pb-10 overflow-scroll scrollbar-hide ">

        {/*  message sent */}
        <div className=" flex items-center justify-end p-2">
          <div className=" bg-color text-white p-2 rounded-md">
            <p>Hey, How are you? ..</p>
          </div>
          </div>

        {/*  message received */}
        <div className=" flex items-center justify-start p-2">
          <div className=" bg-white p-2 rounded-md">
            <p>Hey, I`m fine ..</p>
          </div>
          </div>


        {/* bottom */}
        <div className=" fixed bottom-0 w-full bg-white p-2 flex items-center space-x-2 text-blue-500">
          <Image />
          <Mic />
          <Smile />
          <input
            type="text"
            placeholder="Type a message"
            className="p-2 flex-1 bg-slate-200 shadow-sm text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SendHorizontal />
        </div>


      </div>
    </section>
  );
};

export default MessageRoom;
