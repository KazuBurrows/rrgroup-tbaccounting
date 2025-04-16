import React, { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewCard from "./ReviewCard";

export const slides = [
  {
    id: 1,
    comment: `I have been working with Tulasha since my cleaning business was registered and since then, Tulasha has been a great asset to my business.

Her way of working has always been professional as she has always given the best advice for the better of my business and her knowledge in financial reporting and taxation management has always helped my business to move forward in the right direction.

An additional bonus taking the advantage of her experience and expertise in the accounting field is a great value for my money. As a friend and as my accountant Tulasha has given me great advice on how we can optimise my business to save money for my first house and from her accounting side we were able to get our first new house.

I would recommend anyone to give Tulasha a chance for the wonderful service she provides.`,
    name: "Shyheel",
    business: "Director, Deepu Lals Cleaning Limited",
  },
  {
    id: 2,
    comment: `I have had the absolute pleasure of working with Tulsha for the past year, and I can confidently say she is an outstanding accountant. Her meticulous attention to detail, deep expertise in tax preparation and financial planning, and remarkable ability to simplify complex financial matters have been truly invaluable.

Tulsha consistently exceeds expectations with her professionalism, responsiveness, and dedication to delivering excellent results.

I highly and wholeheartedly recommend Tulsha to anyone in need of a skilled, reliable, and exceptional accountant.`,
    name: "Rezene Asgedom",
    business: "CEO, Clean World LTD",
  },
  {
    id: 3,
    comment: `I am writing to express my utmost satisfaction and gratitude for the exceptional accounting services provided by our accountant over the past two years.

Their performance has been fantastic, consistently demonstrating a remarkable ability to simplify complex financial matters and an unwavering commitment to problem-solving.

In summary, our accountant has met and exceeded expectations in every aspect. Their professionalism, easy-to-understand communication style, problem-solving abilities, and advocacy for our business have made them an invaluable asset to me.`,
    name: "Samrit Rai",
    business: "CEO, Elora Limit",
  },
];

function Testimonials() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 10,
    },
  });
  return (
    <div className="h-full bg-[#172b4d] text-white py-16">
      <div className="w-3/5 mx-auto text-center">
        <h1 className="text-4xl font-bold py-8">Hear from clients</h1>
        <p className="text-xl w-2/3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur{" "}
          <span className="text-rose-600">
            sed do eiusmod tempor incididunt
          </span>{" "}
          magna aliqua. quis nostrud exercitation ullamco.
        </p>

        <div className="py-8">
          <div ref={sliderRef} className="keen-slider">
            {slides.map((slide, idx) => (
              <div key={`slide-${slide}-${idx}`} className={`keen-slider__slide number-slide${idx}`}>
                <ReviewCard
                  comment={slide.comment}
                  name={slide.name}
                  business={slide.business}
                ></ReviewCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
