import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { useCallback } from "react";
import Asdf from "./asdf";

const autoplayOptions = {
  delay: 4000,
};

function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div>
      <div className="embla relative mb-6 p-3">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <img src="img/ad.jpg" alt="" />
            </div>
            <div className="embla__slide">
              <img src="img/ad 2.jpg" alt="" />
            </div>
            <div className="embla__slide">
              <img src="img/ad 3.webp" alt="" />
            </div>
            <div className="embla__slide">
              <img src="img/ad 4.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="   absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button className="embla__prev btn btn-circle" onClick={scrollPrev}>
            ❮
          </button>
          <button className="embla__next btn btn-circle" onClick={scrollNext}>
            ❯
          </button>
        </div>
      </div>
      <div>
        <div className="p-3 bg-white shadow-xl m-4 rounded-lg">
          <div>
            <h3 className="text-2xl text-black my-5 font-bold">
              Best of Electronics
            </h3>
          </div>
          <div className="flex gap-4">
            <Asdf
              img="img/camera.webp"
              discrption="cameras"
              tittle="Shop Now"
            />
            <Asdf
              img="img/projector.webp"
              discrption=" projectors"
              tittle="From ₹9,999"
            />
            <Asdf
              img="img/mouse.webp"
              discrption="wirewless keyboard & mouse"
              tittle="From ₹169"
            />
            <Asdf
              img="img/adapter.webp"
              discrption="USB Gadgets"
              tittle="From ₹179"
            />
            <Asdf
              img="img/powerBank.webp"
              discrption="Premium PowerBank"
              tittle="Shop Now"
            />
            <Asdf
              img="img/printer.webp"
              discrption="printers"
              tittle="From ₹3,999"
            />
          </div>
        </div>
        <div className="p-3 bg-white shadow-xl m-4 rounded-lg">
          <div>
            <h3 className="text-2xl text-black my-5 font-bold">
              Best of Electronics
            </h3>
          </div>
          <div className="flex gap-4">
            <Asdf
              img="img/camera.webp"
              discrption="cameras"
              tittle="Shop Now"
            />
            <Asdf
              img="img/projector.webp"
              discrption=" projectors"
              tittle="From ₹9,999"
            />
            <Asdf
              img="img/mouse.webp"
              discrption="wirewless keyboard & mouse"
              tittle="From ₹169"
            />
            <Asdf
              img="img/adapter.webp"
              discrption="USB Gadgets"
              tittle="From ₹179"
            />
            <Asdf
              img="img/powerBank.webp"
              discrption="Premium PowerBank"
              tittle="Shop Now"
            />
            <Asdf
              img="img/printer.webp"
              discrption="printers"
              tittle="From ₹3,999"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
