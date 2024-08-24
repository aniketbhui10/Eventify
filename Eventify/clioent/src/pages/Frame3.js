import Footer from "../components/Footer";
import Frame4 from "../components/Frame4";
import Header from "../components/Header";

const Frame3 = () => {
  return (
    <div className="w-full relative bg-black h-[820px]">
      <Footer frameTop="656px" />
      <div className="absolute w-full top-[64px] right-[0%] left-[0%] h-[592px]">
        <Frame4 />
      </div>
      <Header />
    </div>
  );
};

export default Frame3;
