import Header from "../../header/header";
import Navbar from "../navigation/navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
const Post = () => {
  return (
    <>
      <Header />
      <div className="flex w-full h-screen ">
        <Navbar />

        <div className="w-3/4 h-screen ">
          <p className="font-semibold text-5xl mt-5 ml-5">Job Details</p>       

        <div className="w-full h-auto  mt-4 rounded border-2 border-b-0 border-black flex ">
            <div className="w-1/3  h-auto  m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">About</p>
              </div>
              <div className="w-2/3 h-auto text-sm  mt-2 ">
                <p>Tell us about the job post, so we can recommend it to the best candidates.</p>
              </div>
            </div>

            <div className="w-2/3 h-auto   m-4 ">
              <div className="w-full h-auto ">
                <p className="font-semibold text-xl">Job position*</p>
              </div>
              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter job position" />
              </div>

              <div className="w-full h-auto   mt-5  mr-3 ">
                  <p className="font-semibold text-xl">
                    Enter Skills needed*
                  </p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter the skills required for this position" />
                  </div>
                </div>


              <div className="w-full h-auto  mt-5">
                <p className="font-semibold text-xl">Experience*</p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Input placeholder="Enter experience required for this position" />
              </div>

                <div className="w-full h-auto   mt-5  mr-3">
                  <p className="font-semibold text-xl">
                    Enter Salary Range*
                  </p>

                  <div className="w-full h-auto text-sm  mt-2 ">
                    <Input placeholder="Enter salary range for this position" />
                  </div>
                </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">
                  Location*
                </p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Textarea placeholder="Enter the  Location of the job" />
              </div>

              <div className="w-full h-auto mt-5">
                <p className="font-semibold text-xl">
                  Job Description*
                </p>
              </div>

              <div className="w-full h-auto text-sm  mt-2 ">
                <Textarea placeholder="Give the description of the job..." />
              </div>

            </div>
          </div>

          <Separator className="bg-black"/>

        </div>
      </div>
    </>
  );
};

export default Post;
