import { BASE_URL } from '../constants';

export const User = () => {
  return (
    <div className="w-0 group-hover:w-96 transition-all duration-500 ease-linear flex gap-5 items-center">
      <div className="relative overflow-hidden rounded-full w-20 h-20">
        <img
          src={`${BASE_URL}/assets/profile_pic.png`}
          alt="Daniel profile image"
          className="text-white object-cover h-full"
        />
      </div>
      <span className="font-lexend text-white text-2xl overflow-hidden w-0 group-hover:w-72 transition-all duration-500 ease-linear">
        Daniel
      </span>
    </div>
  );
};
