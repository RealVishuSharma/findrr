import Header from "../../header/header";
import Navbar from "../navigation/navbar";

const dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex w-full h-screen ">
        <Navbar />

        <div className="w-3/4 h-screen ">
          <p className="font-semibold text-5xl mt-5 ml-5">
            Dashboard
          </p>
          <div className="w-full h-auto  mt-4 rounded border-2  border-black flex ">
            <p>This is the Dashboard page.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
