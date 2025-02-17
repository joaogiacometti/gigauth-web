import { ProfileBtn } from "./profile-btn";

export const Header = () => {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <p className="font-bold text-foreground">GigAuth</p>
      <div className="flex items-center gap-4">
        <ProfileBtn />
      </div>
    </div>
  );
};
