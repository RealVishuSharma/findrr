
"use client"
import Header from "../../header/header";
import Navbar from "../navigation/navbar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";


const job = async() => {
  const res = await fetch("http://localhost:1234/company/post");
  const data = await res.json();
  const position = data[0].position;
  const skills = data[0].skills;
  const experience = data[0].experience;
  const salary = data[0].salary;
  const location = data[0].location;
  const description = data[0].description;

  if(!data) {
    console.log("Data not found!");
  } else {
    console.log(data);
    console.log();
    return {
      positions: position,
       skills: skills,
       experience: experience,
       salary : salary,
       location : location,
       description : description,
    }
  }
}

const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const show = arrays.map((output) => {

  const jobData = job();


  return (
    <Drawer>
      <DrawerTrigger>
        <div className="w-full h-40  mt-3 rounded-2xl border-2 border-stone-700">
          <div className="w-full h-10  flex  ">
            <div className="flex justify-start w-1/2 items-center">
              <p className="text-2xl font-bold ml-3 justify-start">
                Software Engineer - I
                  {jobData.positions}
              </p>
            </div>
            <div className="flex justify-end w-1/2 items-center">
              <p className="text-sm mr-3 justify-end">5 Days Ago</p>
            </div>
          </div>

          <div className="w-full h-10  flex  ">
            <div className="flex justify-start w-1/2 items-center">
              <p className="text-2xl font-bold ml-3 justify-start">
                $45K - $60K
              </p>
            </div>
            <div className="flex justify-end w-1/2 items-center">
              <p className="text-sm mr-3 justify-end">3+ Years Experience</p>
            </div>
          </div>

          <div className="flex justify-start w-full ">
            <p className="text-sm mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              temporibus perspiciatis optio? Aliquam dolores quod sequi ad animi
              deleniti unde debitis, ducimus temporibus, non repudiandae eos
              itaque deserunt iure! Sequi, accusamus magnam dolor praesentium
              repellat corrupti voluptatum ad id ipsum laborum non
            </p>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>
            <div className="w-full h-40  mt-3 rounded-2xl border-2 border-stone-700">
              <div className="w-full h-10  flex  ">
                <div className="flex justify-start w-1/2 items-center">
                  <p className="text-2xl font-bold ml-3 justify-start">
                    Web Developer
                  </p>
                </div>
                <div className="flex justify-end w-1/2 items-center">
                  <p className="text-sm mr-3 justify-end">5 Days Ago</p>
                </div>
              </div>

              <div className="w-full h-10  flex  ">
                <div className="flex justify-start w-1/2 items-center">
                  <p className="text-2xl font-bold ml-3 justify-start">
                    $45K - $60K
                  </p>
                </div>
                <div className="flex justify-end w-1/2 items-center">
                  <p className="text-sm mr-3 justify-end">
                    3+ Years Experience
                  </p>
                </div>
              </div>

              <div className="flex justify-start w-full ">
                <p className="text-sm mt-3 ml-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  temporibus perspiciatis optio? Aliquam dolores quod sequi ad
                  animi deleniti unde debitis, ducimus temporibus, non
                  repudiandae eos itaque deserunt iure! Sequi, accusamus magnam
                  dolor praesentium repellat corrupti voluptatum ad id ipsum
                  laborum non
                </p>
              </div>
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Apply</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
});

const Home = () => {

  
  return (
    <>
      <Header />
      <div className="flex w-full h-screen ">
        <Navbar />

        <div className="w-3/4 h-screen">
          <ScrollArea className=" w-full h-screen rounded-md border p-4">  
          {show}
          </ScrollArea>

        </div>
      </div>

    {/* <Button onClick= {job}>Fetch User Data</Button> */}

    </>
  );
};

export default Home;
