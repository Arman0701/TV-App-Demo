import featureImage from '../assets/FeaturedCoverImage.png';

export const HomePage = () => {
  return (
    <div>
      Here should appear a home page of this application.
      <img
        src={featureImage}
        alt="cover image"
        className="w-screen h-screen object-cover absolute top-0 -z-50"
      />
    </div>
  );
};
