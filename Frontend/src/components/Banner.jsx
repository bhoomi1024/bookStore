import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              "Welcome to our bookstore, where every page holds a new adventure.
              Dive into our curated collection of timeless classics and
              contemporary gems. Explore worlds beyond imagination and
              characters who linger in the heart long after the book is closed.
              Whether you're seeking wisdom, romance, or thrilling escapades,
              our shelves await your discovery. Embrace the magic of
              storytelling as you browse our carefully curated selection. From
              beloved bestsellers to hidden literary treasures, there's
              something for every reader to uncover. Join us in celebrating the
              power of literature to inspire, educate, and transport. Step
              inside and let your journey through the written word begin.
              Welcome to a place where dreams take shape and imagination knows
              no bounds. Start your next chapter with us today."
            </p>
          </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
