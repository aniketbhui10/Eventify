import Footer from "../components/Footer";
import Frame5 from "../components/Frame5";
import FeatureCard from "../components/FeatureCard";
import Header1 from "../components/Header1";

const Frame = () => {
  return (
    <div className="w-full h-relative bg-black h-[1100px] text-center text-base text-white font-roboto">
      <Footer />
      <Frame5 />
      <div className="absolute w-full top-[64px] right-[0%] left-[0%] h-[355px]">
      <div
  className="absolute w-full h-full top-0 left-0"
  style={{
    backgroundImage: `url(./jj.jpg)`,
    opacity: 0.95,
    backgroundSize: "cover", // add this to scale the image to cover the entire background
    backgroundPosition: "center", // add this to center the image
  }}
>
        
        <div className="absolute w-full top-[80px] right-[0%] left-[0%] h-[164px]">
        
            
            
          <div className="absolute top-[116px] left-[calc(50%_-_56.5px)] rounded-9980xl bg-white w-[114px] h-10 text-mediumspringgreen">
            <div className="absolute top-[8px] left-[calc(50%_-_41px)] leading-[24px] font-semibold inline-block w-[100px]flex items center">
              Register
            </div>
          </div>
          <div className="absolute top-[64px] left-[calc(50%_-_631.5px)] w-[1263px] h-7 text-lg">
            <div className="absolute top-[0px] left-[calc(50%_-_237.5px)] leading-[28px]  inline-block b-6 w-[475px]">
                Seamless Events, Unforgettable Experiences!
            </div>
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-12 text-[48px] text-black">
            <b className="absolute top-[-5px] left-[calc(50%_-_350.5px)] leading-[48px] inline-block py-4 w-[702px]">
              Register your event
            </b>
          </div>
        </div>
      </div>
      <Header1 />
    </div>
  );
};

export default Frame;
