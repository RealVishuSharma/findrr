import Header from "../header/header";
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

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex w-full h-screen bg-red-500">
        <Navbar />

        <div className="w-3/4 h-screen">
          <Drawer>
            <DrawerTrigger>
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
                <p className="text-sm mr-3 justify-end">3+ Years Experience</p>
              </div>
            </div>

            <div className="flex justify-start w-full ">
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                temporibus perspiciatis optio? Aliquam dolores quod sequi ad
                animi deleniti unde debitis, ducimus temporibus, non repudiandae
                eos itaque deserunt iure! Sequi, accusamus magnam dolor
                praesentium repellat corrupti voluptatum ad id ipsum laborum non
                
              </p>
            </div>
          </div>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

        
        </div>
      </div>
    </>
  );
};

export default Home;
