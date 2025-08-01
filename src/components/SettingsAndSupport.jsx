import { Link } from 'react-router-dom';

export const SettingsAndSupport = () => {
  return (
    <div className="flex flex-col gap-4 mt-auto overflow-hidden w-0 group-hover:w-full transition-all ease-linear duration-500">
      <Link
        className="w-80 overflow-hidden text-[#858688] font-lexend uppercase text-2xl hover:text-white transition-colors duration-500 focus:text-white"
        to="#"
      >
        Language
      </Link>
      <Link
        className="w-80 overflow-hidden text-[#858688] font-lexend uppercase text-2xl hover:text-white transition-colors duration-500 focus:text-white"
        to="#"
      >
        Get Help
      </Link>
      <Link
        className="w-80 overflow-hidden text-[#858688] font-lexend uppercase text-2xl hover:text-white transition-colors duration-500 focus:text-white"
        to="#"
      >
        Exit
      </Link>
    </div>
  );
};
