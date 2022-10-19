import { FaInstalod } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";
export const Loading1 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-6xl text-red-600">
      <div className=" animate-spin">
        <FaInstalod />
      </div>
      <div className="text-3xl font-black text-black">
        List is loading please wait some time .......
      </div>
    </div>
  );
};

export const Loading2 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-6xl text-red-600">
      <div className="animate-spin">
        <BiLoader />
      </div>
      <div className="text-3xl font-black text-black">
        List is loading please wait some time .......
      </div>
    </div>
  );
};
