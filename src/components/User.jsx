import { BASE_URL } from '../constants';

export const User = () => {
  return (
    <div className="w-96 flex gap-5 items-center invisible group-hover:visible transition-transform hover:duration-1000 duration-0">
      <div className="relative overflow-hidden rounded-full border w-20 h-20">
        <img
          src={`${BASE_URL}/assets/profile_pic.png`}
          alt="Daniel profile image"
          className="text-white object-cover h-full"
        />
      </div>
      <span className="text-white text-2xl invisible group-hover:visible transition-all hover:duration-1000 duration-0">
        Daniel
      </span>
    </div>
  );
};
