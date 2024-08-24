import Footer from "../components/Footer";
import Frame1 from "../components/Frame1";
import FeatureCard from "../components/FeatureCard";
import Header from "../components/Header";

const Frame = () => {
  return (
    <div className="w-full relative bg-black h-[1700px] text-center text-base text-white font-roboto">
      <Footer />
      <Frame1 />
      <FeatureCard />
      <div className="absolute w-full top-[64px] right-[0%] left-[0%] h-[316px]">
      <div
  className="absolute w-full h-full top-0 left-0"
  style={{
    backgroundImage: `url(./ii.jpg)`,
    opacity: 0.95,
    backgroundSize: "cover", // add this to scale the image to cover the entire background
    backgroundPosition: "center", // add this to center the image
  }}
>
        
        <div className="absolute w-full top-[80px] right-[0%] left-[0%] h-[156px]">
        
            
            
          <div className="absolute top-[116px] left-[calc(50%_-_56.5px)] rounded-9980xl bg-white w-[114px] h-10 text-mediumspringgreen">
            <div className="absolute top-[8px] left-[calc(50%_-_41px)] leading-[24px] font-semibold inline-block w-[100px]flex items-center">
              Get Started
            </div>
          </div>
          <div className="absolute top-[64px] left-[calc(50%_-_631.5px)] w-[1263px] h-7 text-lg">
            <div className="absolute top-[0px] left-[calc(50%_-_237.5px)] leading-[28px]  inline-block b-6 w-[475px]">
              Join us and experience the best event management system
            </div>
            </div>
          </div>
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-12 text-[48px] text-black">
            <b className="absolute top-[-5px] left-[calc(50%_-_350.5px)] leading-[48px] inline-block py-4 w-[702px]">
              Manage Your Events Effortlessly
            </b>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Frame;
