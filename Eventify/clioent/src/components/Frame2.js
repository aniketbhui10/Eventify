import { useMemo } from "react";
import PropTypes from "prop-types";

const Frame2 = ({
  className = "",
  descriptionOfEvent3JoinUs,
  event3,
  propRight,
  propLeft,
}) => {
  const frame1Style = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div
      className={`absolute w-[31.67%] top-[0px] right-[0%] left-[68.33%] shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.1),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-gray-100 h-[468px] overflow-hidden text-left text-base text-white font-roboto ${className}`}
      style={frame1Style}
    >
      <div className="absolute top-[404px] left-[calc(50%_-_56px)] rounded-9980xl bg-mediumspringgreen w-[113px] h-10 text-center">
        <div className="absolute top-[8px] left-[calc(50%_-_40.5px)] leading-[24px] inline-block w-[81px]">
          Learn More
        </div>
      </div>
      <div className="absolute w-[88%] top-[340px] right-[6%] left-[6%] h-12 text-darkgray-200">
        <div className="absolute w-[77.27%] top-[2px] left-[0%] leading-[24px] inline-block">
          {descriptionOfEvent3JoinUs}
        </div>
      </div>
      <div className="absolute w-[88%] top-[304px] right-[6%] left-[6%] h-7 text-xl">
        <div className="absolute w-[18.75%] top-[-1px] left-[0%] leading-[28px] font-semibold inline-block">
          {event3}
        </div>
      </div>
      <img
        className="absolute top-[24px] left-[calc(50%_-_176px)] rounded-lg w-[352px] h-[264px] overflow-hidden"
        alt=""
        src="/frame3.svg"
      />
    </div>
  );
};

Frame2.propTypes = {
  className: PropTypes.string,
  descriptionOfEvent3JoinUs: PropTypes.string,
  event3: PropTypes.string,

  /** Style props */
  propRight: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Frame2;
