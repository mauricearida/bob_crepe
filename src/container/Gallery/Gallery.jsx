import { useRef } from "react";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__bg app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Vango" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAAAAA", marginTop: "2rem" }}>
          We are conveniently located in Rittenhouse Square on 18th street between Sansom street and Chestnut street.
        </p>
        {/* <button type="button" className="custom__button">
          View More
        </button> */}
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {/* {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => ( */}
          {[
            images.vango6,
            images.vango1,
            images.vango5,
            images.vango4,
            images.vango7,
            images.vango3,
            images.vango2,
            images.vango8,
            images.vango9,
          ].map((image, index) => (
            <a
              className="app__gallery-images_card flex__center"
              href="https://www.instagram.com/vangoloungeandskybar/"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" loading="lazy" />
              <BsInstagram className="gallery__image-icon" />
            </a>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll("left")} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
