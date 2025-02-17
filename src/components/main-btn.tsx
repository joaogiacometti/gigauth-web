import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface MainBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  children: React.ReactNode;
}

export default function MainBtn({
  isLoading,
  children,
}: Readonly<MainBtnProps>) {
  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? <Loader2 className="size-4 animate-spin" /> : children}
    </Button>
  );
}
