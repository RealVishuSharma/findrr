
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Ghost } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="w-full h-20 md:h-auto  flex items-center justify-around mt-3 ">
        <div className="w-40  flex justify-end">
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://tse2.mm.bing.net/th/id/OIG3.ud5RK9NC9D2.L.3wEV5_?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="w-full justify-end flex items-center">
          <div className="flex justify-end mr-5">
            <Input placeholder="Search" className="h-9" />
          </div>

          <div className="justify-end mr-8 flex">
            <Button className="mr-5" variant={Ghost}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </div>
      <hr  className="mt-3"/>
    </>
  );
};

export default page;
