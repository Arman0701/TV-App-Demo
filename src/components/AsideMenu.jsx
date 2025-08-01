import { Menu } from './Menu';
import { SettingsAndSupport } from './SettingsAndSupport';
import { User } from './User';

export const AsideMenu = () => {
  return (
    <aside className="flex flex-col gap-7 group w-40 bg-transparent h-screen fixed py-16 px-9 hover:w-96 transition-all">
      <User />
      <Menu />
      <SettingsAndSupport />
      <div className="fixed inset-0 -z-10 pointer-events-none w-40 duration-[500ms] group-hover:w-screen group-hover:from-[30%] ease-linear transition-all h-screen bg-gradient-to-r from-black from-[80%] to-black/20" />
    </aside>
  );
};
