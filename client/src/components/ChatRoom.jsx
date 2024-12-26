import { EllipsisVertical, PhoneCall, Search, Video } from "lucide-react";
import chatGif from "../assets/image/chat.gif";
import { TypeAnimation } from "react-type-animation";
const ChatRoom = ({ currentUser = null }) => {
  return (
    <div
      className={`hidden lg:block lg:flex-1  h-screen ${
        currentUser ? "bg-indigo-200" : "bg-white"
      }`}
    >
      {currentUser ? (
        <div className="  shadow-md bg-indigo-500 w-full p-2 px-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              className="size-14 rounded-full"
              src="https://i.pinimg.com/736x/1b/d5/7e/1bd57e70fd4973d6287e3bab2cdc44b8.jpg"
            />
            <div>
              <h2 className="text-white">John Doe</h2>
              <p className="text-white text-xs">Active Now</p>
            </div>
          </div>
          <div className=" flex items-center space-x-5 text-slate-100 ">
            <PhoneCall size={28} className=" cursor-pointer " />
            <Video size={28} className=" cursor-pointer " />
            <Search size={28} className=" cursor-pointer " />
            <EllipsisVertical size={33} className=" cursor-pointer " />
          </div>
        </div>
      ) : (
        <div className=" w-full h-full">
          <img src={chatGif} className="mx-auto pt-16" />
          <div className="text-center text-indigo-500 text-xl font-semibold">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Communiction with Your Best Friend",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Communiction with Your lover",
                1000,
                "Communiction with Your Family",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
