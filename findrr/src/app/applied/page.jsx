
import Header from "../header/header";
import Navbar from "../navigation/navbar";

const Applied = () => {
  return (
    <>
      <Header />
      <div className="flex w-full h-screen bg-red-500">
        <Navbar />

        <div className="w-3/4 h-screen bg-purple-900">
          <h1>This is the Applied Page.</h1>
        </div>
      </div>
    </>
  );
}

export default Applied
