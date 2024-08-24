import PropTypes from "prop-types";

const Frame4 = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-full top-[64px] right-[0%] left-[0%] shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.1),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-gray-100 h-[464px] overflow-hidden text-left text-base text-white font-roboto ${className}`}
    >
      <div className="absolute w-[94.93%] top-[32px] right-[2.53%] left-[2.53%] h-[400px]">
        <div className="absolute w-[50.04%] top-[0px] right-[-0.08%] left-[50.04%] h-[400px]">
          <div className="absolute top-[268px] left-[calc(50%_-_64px)] rounded-9980xl bg-mediumspringgreen w-32 h-10 text-center">
            <div className="absolute top-[8px] left-[calc(50%_-_48px)] leading-[24px] font-semibold inline-block w-[97px]">
              Register Now
            </div>
          </div>
          <div className="absolute w-[94.67%] top-[172px] right-[0%] left-[5.33%] h-[72px] text-darkgray-200">
            <div className="absolute w-[96.3%] top-[2px] left-[0%] leading-[24px] inline-block">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </div>
          </div>
          <div className="absolute w-[94.67%] top-[132px] right-[0%] left-[5.33%] h-6">
            <div className="absolute w-[33.98%] top-[2px] right-[53.87%] left-[12.15%] h-[19px]">
              <div className="absolute w-[100.52%] top-[-2px] left-[0%] leading-[24px] inline-block">
                123 Event Street, Event City
              </div>
            </div>
            <div className="absolute w-[12.32%] top-[0px] left-[0%] leading-[24px] text-darkgray-200 inline-block">
              Location:
            </div>
          </div>
          <div className="absolute w-[94.67%] top-[92px] right-[0%] left-[5.33%] h-6">
            <div className="absolute w-[24.47%] top-[2px] right-[67.96%] left-[7.57%] h-[19px]">
              <div className="absolute w-[100.72%] top-[-2px] left-[0%] leading-[24px] inline-block">
                10:00 AM - 4:00 PM
              </div>
            </div>
            <div className="absolute w-[7.75%] top-[0px] left-[0%] leading-[24px] text-darkgray-200 inline-block">
              Time:
            </div>
          </div>
          <div className="absolute w-[94.67%] top-[52px] right-[0%] left-[5.33%] h-6">
            <div className="absolute w-[26.23%] top-[2px] right-[66.73%] left-[7.04%] h-[19px]">
              <div className="absolute w-full top-[-2px] left-[0%] leading-[24px] inline-block">
                25th December 2023
              </div>
            </div>
            <div className="absolute w-[7.22%] top-[0px] left-[0%] leading-[24px] text-darkgray-200 inline-block">
              Date:
            </div>
          </div>
          <div className="absolute w-[94.67%] top-[0px] right-[0%] left-[5.33%] h-9 text-11xl">
            <b className="absolute w-[25.18%] top-[0px] left-[0%] leading-[36px] inline-block">
              Event Title
            </b>
          </div>
        </div>
        <img
          className="absolute w-[50.04%] top-[0px] right-[49.96%] left-[0%] max-w-full overflow-hidden h-[400px]"
          alt=""
          src="/frame8.svg"
        />
      </div>
    </div>
  );
};

Frame4.propTypes = {
  className: PropTypes.string,
};

export default Frame4;
