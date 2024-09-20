import ServiceItemComponent from "../Molecules/ServiceItemComponent";

const ServiceMobile = () => {
  return (
    <>
      <ServiceItemComponent description="Elevate your online presence with my expertise in crafting beautifully tailored websites and landing pages." />
      <ServiceItemComponent
        header="Viral Short form content 🔥"
        description="Looking to gain a million views over the weekend? My viral short-form video editing service can help you achieve that goal with captivating and shareable content."
      />
      <ServiceItemComponent
        header="Motion Graphics"
        description="Convey your message effectively with cool short animations, whether it's a loading screen or a showreel for your product. I'm here to design and create captivating animations that enhance your content"
      />
      <ServiceItemComponent
        header="Video Editing"
        description="Enhance your podcast or a video content with a professional editor who ensures your content is presented effectively."
      />
    </>
  );
};

export default ServiceMobile;
