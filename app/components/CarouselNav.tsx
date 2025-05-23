"use client";

import { Carousel } from "react-responsive-carousel";
import items from "../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselItem {
  id: string | number;
  imageUrl: string;
  title: string;
  text: string;
}

export function ResponsiveCarousel() {
  const { responsive }: { responsive: CarouselItem[] } = items;

  return (
    <div>
      <Carousel
        showArrows={false}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
      >
        {responsive.map((item) => (
          <div key={item.id}>
            <div className="bg-red-600 p-0 mx-auto h-[520px] block w-[1492px]">
              <img src={item.imageUrl} alt="slides" />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
