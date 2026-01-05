import {
  BellRing,
  LogOut,
  MessageCircleQuestionMark,
  MoonStar,
  ReceiptText,
  UserPen,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>collaspable button</div>
        <div>
          <div className="flex">
            <div className="m-2">
              <BellRing />
            </div>
            <div className="m-2">
              <MoonStar />
            </div>
            <div className="m-2">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="/aaa.jpg" />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={6}>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserPen /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ReceiptText />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">
                    <LogOut /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="m-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button>
                    <MessageCircleQuestionMark />
                    <span className="sr-only">Help</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>menu 1</DropdownMenuItem>
                  <DropdownMenuItem>menu 2</DropdownMenuItem>
                  <DropdownMenuItem>menu 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
