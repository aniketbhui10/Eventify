import Frame2 from "./Frame2";
import PropTypes from "prop-types";

const Frame1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-full top-[816px] right-[0%] left-[0%] bg-gray-200 h-[720px] text-left text-base text-white font-roboto ${className}`}
    >
      <div className="absolute w-full top-[188px] right-[0%] left-[0%] h-[468px]">
        <Frame2
          descriptionOfEvent3JoinUs="Description of Event 3. Join us for an unforgettable experience."
          event3="Event 3"
        />
        <Frame2
          descriptionOfEvent3JoinUs="Description of Event 2. Join us for an unforgettable experience."
          event3="Event 2"
          propRight="34.13%"
          propLeft="34.2%"
        />
        <Frame2
          descriptionOfEvent3JoinUs="Description of Event 1. Join us for an unforgettable experience."
          event3="Event 1"
          propRight="68.33%"
          propLeft="0%"
        />
      </div>
      <div className="absolute w-full top-[64px] right-[0%] left-[0%] h-[76px] text-center text-darkgray-200">
        <div className="absolute w-full top-[52px] right-[0%] left-[0%] h-6">
          <div className="absolute top-[0px] left-[calc(50%_-_113.5px)] leading-[24px] inline-block w-[228px]">
            Don't miss our upcoming events
          </div>
        </div>
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-9 text-11xl text-white">
          <b className="absolute top-[0px] left-[calc(50%_-_117.5px)] leading-[36px] inline-block w-[235px]">
            Upcoming Events
          </b>
        </div>
      </div>
    </div>
  );
};

Frame1.propTypes = {
  className: PropTypes.string,
};

export default Frame1;
