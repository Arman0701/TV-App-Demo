import { createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL, LAST_SEEN_KEY } from '../constants';
import { toMilliseconds } from '../utils/toMIlliseconds';

const Context = createContext(null);

export const HomePageProvider = ({ children }) => {
  const [trendingNow, setTrendingNow] = useState(null);
  const [featured, setFeatured] = useState(null);
  const storageIdsList = JSON.parse(sessionStorage.getItem(LAST_SEEN_KEY)) || [];

  const getHomePageData = async () => {
    const response = await fetch(`${BASE_URL}/assets/db/data.json`);
    const data = await response.json();
    setFeatured(data.Featured);
    const dataMap = data.TrendingNow.reduce((acc, item) => {
      acc[item.Id] = item;
      return acc;
    }, {});

    const lastSeenMoviesList = storageIdsList
      .map((id) => {
        const item = dataMap[id];
        return item || null;
      })
      .filter((item) => item !== null);

    const restOfMovies = data.TrendingNow.filter((m) => !storageIdsList.includes(m.Id)).sort(
      (a, b) => toMilliseconds(a.Date) - toMilliseconds(b.Date)
    );
    setTrendingNow([...lastSeenMoviesList, ...restOfMovies].slice(0, 50));
  };

  const changeFeatured = (coverId) => {
    const cover = trendingNow.find((c) => c.Id === coverId);
    sessionStorage.setItem(LAST_SEEN_KEY, JSON.stringify([coverId, ...storageIdsList]));
    setFeatured(cover);
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  const value = {
    trendingNow,
    featured,
    getHomePageData,
    changeFeatured,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useHomePageProvider = () => useContext(Context);
