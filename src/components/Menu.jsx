import { BASE_URL } from '../constants';

export const Menu = () => {
  const menuButtons = [
    { title: 'Search', iconUrl: `${BASE_URL}/assets/icons/search.png` },
    { title: 'Home', iconUrl: `${BASE_URL}/assets/icons/home.png` },
    { title: 'TV Shows', iconUrl: `${BASE_URL}/assets/icons/shows.png` },
    { title: 'Movies', iconUrl: `${BASE_URL}/assets/icons/movies.png` },
    { title: 'Genres', iconUrl: `${BASE_URL}/assets/icons/genres.png` },
    { title: 'Watch Later', iconUrl: `${BASE_URL}/assets/icons/watch-later.png` },
  ];

  return (
    <div className="flex flex-col gap-3">
      {menuButtons.map((b, index) => (
        <button
          className="w-min group-hover:w-96 group-hover:gap-12 flex gap-0 items-center py-4 px-6 rounded-xl hover:bg-slate-500 focus:bg-slate-6 transition-all duration-1000" // active:bg-[#3b486d]
          key={index}
        >
          <div className="flex items-center justify-center w-10 h-10">
            <img src={b.iconUrl} alt={`${b.title} icon`} />
          </div>
          <p className="text-white text-left text-4xl leading-none font-bold overflow-hidden whitespace-nowrap w-0 group-hover:w-56 transition-all ease-linear duration-500">
            {b.title}
          </p>
        </button>
      ))}
    </div>
  );
};
