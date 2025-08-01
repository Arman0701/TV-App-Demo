import { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../../constants';
import { useHomePageProvider } from '../../providers/HomePageProvider';
import { toHumanReadableTime } from '../../utils/toHumanReadableTime';

export const FeaturedSection = () => {
  const { featured } = useHomePageProvider();
  const [mountVideoPlayer, setMountVideoPlayer] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setMountVideoPlayer(true);
      videoRef.current.play();
    }, 2000);

    return () => {
      setMountVideoPlayer(false);
      clearTimeout(id);
    };
  }, [featured?.Id]);

  console.log('mountVideoPlayer && featured?.VideoUrl  :::', featured?.VideoUrl);

  return (
    <div className="flex flex-col gap-4">
      <video
        ref={videoRef}
        src={featured?.VideoUrl}
        controls={false}
        loop
        playsInline
        muted
        className="border-8 border-black w-screen h-screen object-cover absolute top-0 -z-50"
      />
      {!mountVideoPlayer || !featured?.VideoUrl ? (
        <img
          src={`${BASE_URL}/assets/${featured?.CoverImage}`}
          alt="cover image"
          className="w-screen h-screen object-cover absolute top-0 -z-50"
        />
      ) : null}
      <div className="px-40 h-full pt-44">
        <span className="text-[#858688] font-bold uppercase text-2xl mb-2">
          {featured?.Category}
        </span>
        <img
          src={`${BASE_URL}/assets/${featured?.TitleImage}`}
          alt="title image"
          className="mb-4"
        />
        <div className="text-white flex gap-4 text-xl mb-4">
          <span>{featured?.ReleaseYear}</span>
          <span>{featured?.MpaRating}</span>
          <span>{toHumanReadableTime(featured?.Duration)}</span>
        </div>
        <div className="overflow-y-auto max-h-52 h-fit mb-4 scrollbar-none">
          <p className="text-[#c5c8cf] text-2xl w-1/2 ">{featured?.Description}</p>
          <p className="text-[#c5c8cf] text-2xl w-1/2 ">{featured?.Description}</p>
        </div>

        <div className="flex gap-6">
          <button className="w-48 py-4 rounded-full text-2xl bg-white text-black font-bold">
            &#9658; Play
          </button>
          <button className="w-48 py-4 rounded-full text-2xl bg-gradient-to-r from-[#2325E7] to-[#04187F] text-white font-bold">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
