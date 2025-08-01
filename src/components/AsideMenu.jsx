import { Menu } from './Menu';
import { SettingsAndSupport } from './SettingsAndSupport';
import { User } from './User';

export const AsideMenu = () => {
  return (
    <aside className="flex flex-col gap-7 group w-40 bg-transparent h-screen fixed py-16 px-9 hover:w-96 transition-all">
      <User />
      <Menu />
      <SettingsAndSupport />
      <div className="fixed inset-0 -z-10 pointer-events-none w-min h-screen bg-gradient-to-r from-black from-[30%] to-transparent to-[70%] invisible group-hover:visible group-hover:w-screen transition-all" />
    </aside>
  );
};
