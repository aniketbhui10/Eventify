import { useMemo } from "react";
import PropTypes from "prop-types";

const Footer = ({ className = "", frameTop }) => {
  const frameStyle = useMemo(() => {
    return {
      top: frameTop,
    };
  }, [frameTop]);

  return (
    <div
      className={`absolute w-full top-[1536px] right-[0%] left-[0%] bg-gray-200 h-[164px] text-center text-base text-darkgray-200 font-roboto ${className}`}
      style={frameStyle}
    >
      <div className="absolute w-full top-[32px] right-[0%] left-[0%] h-[100px]">
        <div className="absolute w-full top-[76px] right-[0%] left-[0%] h-6">
          <img
            className="absolute top-[0px] left-[calc(50%_+_24.5px)] w-4 h-6"
            alt=""
            src="/frame.svg"
          />
          <img
            className="absolute top-[0px] left-[calc(50%_-_7.5px)] w-4 h-6"
            alt=""
            src="/frame1.svg"
          />
          <img
            className="absolute top-[0px] left-[calc(50%_-_39.5px)] w-4 h-6"
            alt=""
            src="/frame2.svg"
          />
        </div>
        <div className="absolute w-full top-[36px] right-[0%] left-[0%] h-6">
          <div className="absolute top-[0px] left-[calc(50%_-_149.5px)] leading-[24px] inline-block w-[299px]">
            © 2024 Eventify. All rights reserved.
          </div>
        </div>
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-7 text-xl text-white">
          <div className="absolute top-[-1px] left-[calc(50%_-_64.5px)] leading-[28px] font-semibold inline-block w-[130px]">
            Eventify
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameTop: PropTypes.any,
};

export default Footer;
