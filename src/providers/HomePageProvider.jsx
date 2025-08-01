import { createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import { toMilliseconds } from '../utils/toMIlliseconds';

const Context = createContext(null);

export const HomePageProvider = ({ children }) => {
  const [trendingNow, setTrendingNow] = useState(null);
  const [featured, setFeatured] = useState(null);

  const getHomePageData = async () => {
    const response = await fetch(`${BASE_URL}/assets/db/data.json`);
    const data = await response.json();
    setFeatured(data.Featured);
    const lastSeenId = sessionStorage.getItem('lastSeenId');
    let lastSeenMovie = null;
    const preparedTrendingList = data.TrendingNow.filter((m) => {
      if (m.Id === lastSeenId) {
        lastSeenMovie = m;
      }

      return m.Id !== lastSeenId;
    })
      .slice(0, 50)
      .sort((a, b) => toMilliseconds(a.Date) - toMilliseconds(b.Date));

    if (lastSeenMovie) {
      return setTrendingNow([lastSeenMovie, ...preparedTrendingList]);
    }
    setTrendingNow(preparedTrendingList);
  };

  const changeFeatured = (coverId) => {
    const cover = trendingNow.find((c) => c.Id === coverId);
    sessionStorage.setItem('lastSeenId', coverId);
    setFeatured(cover);
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  const value = {
    trendingNow,
    featured,
    sliderActiveImageIndex: 0,
    getHomePageData,
    changeFeatured,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useHomePageProvider = () => useContext(Context);
