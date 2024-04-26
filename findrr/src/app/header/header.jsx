import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Ghost } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <>
      <div className="w-full h-20 md:h-auto  flex items-center justify-around mt-3 ">
        <div className="w-40  flex justify-end">
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://tse2.mm.bing.net/th/id/OIG3.ud5RK9NC9D2.L.3wEV5_?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>

        <div className="w-full justify-end flex items-center">
          <div className="flex justify-end mr-5">
            <Input placeholder="Search" className="h-9" />
          </div>

          <div className="justify-end mr-8 flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="mr-5">
              <Avatar className="mr-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


          </div>
        </div>
      </div>
      <hr className="mt-3" />
    </>
  );
};

export default Header;
