import { EllipsisVertical, GalleryHorizontalEnd, MessageCircleMoreIcon } from "lucide-react";
const Sidebar = () => {
  return (

    <div className=" lg:w-4/12 xl:w-3/12 w-full bg-indigo-100 lg:bg-indigo-500 h-full overflow-y-scroll">
      {/* header */}
      <section className="  shadow-md bg-indigo-100 w-full p-3 py-5 flex items-center justify-between fixed top-0  z-50">
        <h1 className=" text-slate-600 lg:text-slate-100 text-2xl font-semibold">
          Chats
        </h1>
        <div className=" flex items-center space-x-3 text-slate-700 lg:text-slate-100 ">
          <EllipsisVertical size={29} className=" cursor-pointer " />
        </div>
      </section>

      {/* search */}
      <section className="w-full p-2   items-center justify-between space-x-2 flex mt-20">
        <input
          type="text"
          placeholder="Search or Start New Chat .."
          className="p-2 flex-1 lg:bg-indigo-400 bg-slate-200 shadow-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </section>

      {/* friend */}
      <section>
        <div className="p-2 flex items-center space-x-4 mx-3 overflow-x-scroll scrollbar-hide">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex items-center">
              <div>
                <img
                  className="size-16 min-w-16  rounded-full"
                  src="https://storage.googleapis.com/fc-freepik-pro-rev1-eu-static/ai-styles-landings/anime/characters-and-scenes.jpg?h=1280"
                />
                <p className="text-center text-sm mt-2">John </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* chat list */}
      <section className="w-full flex-1   overflow-scroll">
      {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex items-center">
              <div className="p-2 flex items-center space-x-4 mx-3 overflow-x-scroll scrollbar-hide">
                <img
                  className="size-14 min-w-14  rounded-full"
                  src="https://storage.googleapis.com/fc-freepik-pro-rev1-eu-static/ai-styles-landings/anime/characters-and-scenes.jpg?h=1280"
                />
                <div>
                <p className="  mt-2 text-md">John </p>
                <p className=" text-sm text-slate-600">Something to Eat</p>
                </div>
              </div>
            </div>
          ))}
      </section>

     
    </div>
  );
};

export default Sidebar;
