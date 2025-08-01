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
    setTrendingNow(
      data.TrendingNow.sort((a, b) => toMilliseconds(a.Date) - toMilliseconds(b.Date))
    );
  };

  const changeFeatured = (coverId) => {
    const cover = trendingNow.find((c) => c.Id === coverId);
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
