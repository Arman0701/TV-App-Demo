import { useCallback, useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../../constants';
import { useHomePageProvider } from '../../providers/HomePageProvider';

export const TrendingNowSection = () => {
  const { trendingNow, changeFeatured } = useHomePageProvider();

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Feature 1: Drag-and-drop scrolling with mouse pointer
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed here
      containerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  // Feature 2 & 3: Mouse wheel and track pad scrolling (horizontal and vertical)
  // This is handled by the browser's default behavior, but we can enhance it.
  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY + e.deltaX;
    };

    // Add the listener with { passive: false }
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Clean up on unmount
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Feature 4: Keep focused element in view
  const handleFocus = (e) => {
    const focusedElement = e.target;
    const container = containerRef.current;

    if (focusedElement && container) {
      const elementRect = focusedElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const isElementOutOfViewLeft = elementRect.left < containerRect.left;
      const isElementOutOfViewRight = elementRect.right > containerRect.right;

      if (isElementOutOfViewLeft) {
        container.scrollLeft -= containerRect.left - elementRect.left;
      } else if (isElementOutOfViewRight) {
        container.scrollLeft += elementRect.right - containerRect.right;
      }
    }
  };

  useEffect(() => {
    const carouselContainer = containerRef.current;
    if (carouselContainer) {
      carouselContainer.addEventListener('mousemove', handleMouseMove);
      carouselContainer.addEventListener('mouseup', handleMouseUp);
      carouselContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        carouselContainer.removeEventListener('mousemove', handleMouseMove);
        carouselContainer.removeEventListener('mouseup', handleMouseUp);
        carouselContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [handleMouseMove]);

  return (
    <div className="ml-40 fixed -z-10 bottom-0">
      <p className="text-white text-xl font-bold mb-2">Trending now</p>
      <div
        className="flex overflow-x-scroll cursor-grab scrollbar-none"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onFocus={handleFocus}
      >
        {trendingNow?.map((card, index) => (
          <div
            key={index}
            className="group flex-shrink-0 w-[12.5%] aspect-[9/12] overflow-hidden bg-transparent rounded-lg flex items-center justify-center text-xl outline-none border-4 border-transparent focus:border-sky-600 transition-colors duration-200 ease-linear"
            tabIndex={0}
            onClick={() => changeFeatured(card.Id)}
          >
            <img
              src={`${BASE_URL}/assets/${card.CoverImage}`}
              alt={`${card.Title} cover image`}
              className="group-hover:scale-110 group-focus:scale-110 duration-1000 transition-transform text-black object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
