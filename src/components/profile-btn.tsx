import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/auth";
import { ChevronDownIcon, LogOut } from "lucide-react";

export const ProfileBtn = async () => {
  // TODO: Implement avatar in API

  const { username, email } = await auth();

  const getInitial = (username: string): string => {
    return username[0].toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 outline-none">
        <div className="flex flex-col items-end">
          <span className="text-sm font-medium">{username}</span>
          <span className="text-xs text-muted-foreground">{email}</span>
        </div>

        <Avatar>
          {/* <AvatarImage src="" /> */}
          <AvatarFallback>{getInitial(username)}</AvatarFallback>
        </Avatar>

        <ChevronDownIcon className="size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href="/api/auth/sign-out">
            <LogOut className="mr-2 size-4" />
            Sign Out
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
