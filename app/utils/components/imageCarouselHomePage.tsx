import "./style/imageCarouselHomePage.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

interface ImageCarouselProps {
  deviceType: string;
}

const ImageCarouselHomePage: React.FC<ImageCarouselProps> = ({ deviceType }) => {
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

  return (
    <div className="image-carousel-container">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        // autoPlay={deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all 3s"
        // transitionDuration={4000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationGeometricExampleInfo.png"
            alt="invitation example page 1"
            width={300}
            height={250}
            priority={true}
          />
        </div>

        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationGeometricExampleWelcomeMobile.png"
            alt="invitation example page 1"
            width={120}
            height={220}
            priority={true}
          />
        </div>

        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationGeometricExampleRsvp.png"
            alt="invitation example page 1"
            width={300}
            height={250}
            priority={true}
          />
        </div>

        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationFlowersExampleInfo.png"
            alt="invitation example page 1"
            width={300}
            height={250}
            priority={true}
          />
        </div>

        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationFlowersExampleWelcomeMobile.png"
            alt="invitation example page 1"
            width={150}
            height={250}
            priority={true}
          />
        </div>

        <div className="image-carousel-wrapper">
          <Image
            src="/invitationsExamples/invitationFlowersExampleRsvp.png"
            alt="invitation example page 1"
            width={300}
            height={250}
            priority={true}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarouselHomePage;

// Credit to YIZHUANG, https://www.npmjs.com/package/react-multi-carousel
