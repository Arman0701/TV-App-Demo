import { Outlet } from 'react-router-dom';
import { AsideMenu } from './AsideMenu';

export const Layout = () => {
  return (
    <main className="relative w-full h-full">
      <AsideMenu />
      <section>
        <Outlet />
      </section>
    </main>
  );
};
