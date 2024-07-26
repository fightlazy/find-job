import React, { FC } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiLogOut, BiSolidDownArrow } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";

interface MenuAuthProps {}

const MenuAuth: FC<MenuAuthProps> = ({}) => {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="inline-flex items-center gap-1 cursor-pointer">
          <div className="font-semibold text-primary mr-2">
            Hai, {session?.user.name}
          </div>
          <BiSolidDownArrow className="text-lg" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => signOut()}
          className="text-red-500 font-semibold"
        >
          <BiLogOut className="mr-2" /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuAuth;
