import profileImg from "../assets/image/profile.webp";
import bgImage from "../assets/image/bg.jpg"; 
import { Camera } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const CreateUser = () => {
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const imageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      console.log(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if(!image || !username || !phoneNumber){
    return  toast.error('All fields are required')
    }

    const data = {
      image,
      username,
      phoneNumber
    }

    console.log(data)
  }

  return (
    <div className="w-full h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className=" sm:bg-white  bg-transparent sm:shadow-xl rounded-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="group size-28 mx-auto border-2 border-indigo-500 rounded-full relative overflow-hidden cursor-pointer">
            <input
              type="file"
              onChange={(e) => imageUpload(e.target.files[0])}
              className="absolute p-2 z-30 opacity-0 -bottom-24 group-hover:bottom-0 duration-300 cursor-pointer"
            />
            <div className="bg-black bg-opacity-50 p-2 flex justify-center items-center absolute -bottom-24 group-hover:bottom-0 duration-300 w-full inset-x-0">
              <Camera color="white" size={24} />
            </div>
            <img
              src={image || profileImg}
              className="cursor-pointer size-28 rounded-full"
            />
          </div>
          <div className="w-full mt-5">
            <label className="text-white sm:text-gray-700">Username</label>
            <input
              type="text"
              onChange={e=>setUsername(e.target.value)}
              className="w-full p-2 my-3 border text-gray-700 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label className="text-white sm:text-gray-700">Phone Number</label>
            <input
              type="text"
              onChange={e=>setPhoneNumber(e.target.value)}
              className="w-full p-2 my-3 border text-gray-700 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="w-full p-2 my-4 bg-indigo-500 shadow-xl text-white rounded-md hover:bg-indigo-600 transition duration-300" onClick={handleSubmit}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
