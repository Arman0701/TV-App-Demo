import genresIcon from '../assets/icons/genres.png';
import homeIcon from '../assets/icons/home.png';
import moviesIcon from '../assets/icons/movies.png';
import searchIcon from '../assets/icons/search.png';
import showsIcon from '../assets/icons/shows.png';
import watchLaterIcon from '../assets/icons/watch-later.png';

export const Menu = () => {
  const menuButtons = [
    { title: 'Search', iconUrl: searchIcon },
    { title: 'Home', iconUrl: homeIcon },
    { title: 'TV Shows', iconUrl: showsIcon },
    { title: 'Movies', iconUrl: moviesIcon },
    { title: 'Genres', iconUrl: genresIcon },
    { title: 'Watch Later', iconUrl: watchLaterIcon },
  ];

  return (
    <div className="flex flex-col gap-3">
      {menuButtons.map((b, index) => (
        <button
          className="w-fit group-hover:w-96 flex gap-12 items-center py-4 px-6 rounded-xl hover:bg-slate-500 focus:bg-slate-6 transition-all hover:duration-500 duration-0" // active:bg-[#3b486d]
          key={index}
        >
          <div className="flex items-center justify-center w-10 h-10">
            <img src={b.iconUrl} alt={`${b.title} icon`} />
          </div>
          <p className="text-white text-4xl leading-none font-bold hidden group-hover:block transition-all hover:duration-1000 duration-0">
            {b.title}
          </p>
        </button>
      ))}
    </div>
  );
};
