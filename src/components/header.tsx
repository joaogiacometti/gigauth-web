import { ProfileBtn } from "@/components/profile-btn";
import ThemeSwitcher from "@/components/theme/theme-switcher";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <p className="font-bold text-foreground">GigAuth</p>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />

        <Separator orientation="vertical" className="h-5" />

        <ProfileBtn />
      </div>
    </div>
  );
};
