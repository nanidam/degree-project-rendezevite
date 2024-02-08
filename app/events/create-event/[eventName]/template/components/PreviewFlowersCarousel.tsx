import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const PreviewFlowersCarousel = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="image-carousel-container">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        keyBoardControl={false}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationFlowersExampleWelcome.png"
            alt="First page of invitation with Flowers design desktop"
            width={isDesktop ? 550 : 350}
            height={isDesktop ? 450 : 300}
            priority={true}
          />
        </div>

        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationFlowersExampleWelcomeMobile.png"
            alt="First page of invitation with Flowers design mobile"
            width={isDesktop ? 250 : 200}
            height={isDesktop ? 450 : 350}
            priority={true}
          />
        </div>

        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationFlowersExampleInfo.png"
            alt="Second page of invitation with Flowers design desktop"
            width={isDesktop ? 550 : 320}
            height={isDesktop ? 450 : 320}
            priority={true}
          />
        </div>

        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationFlowersExampleInfoMobile.png"
            alt="Second page of invitation with Flowers design mobile"
            width={isDesktop ? 250 : 200}
            height={isDesktop ? 450 : 350}
            priority={true}
          />
        </div>

        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationFlowersExampleRsvp.png"
            alt="Last page of invitation with Flowers design Desktop"
            width={isDesktop ? 550 : 320}
            height={isDesktop ? 450 : 320}
            priority={true}
          />
        </div>

        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationFlowersExampleRsvpMobile.png"
            alt="Last page of invitation with Flowers design mobile"
            width={isDesktop ? 250 : 200}
            height={isDesktop ? 450 : 350}
            priority={true}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default PreviewFlowersCarousel;

// Credit to YIZHUANG, https://www.npmjs.com/package/react-multi-carousel
