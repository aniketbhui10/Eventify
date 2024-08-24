import PropTypes from "prop-types";

const FeatureCard = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-full top-[380px] right-[0%] left-[0%] h-[436px] text-center text-base text-darkgray-200 font-roboto ${className}`}
    >
      <div className="absolute w-full top-[64px] right-[0%] left-[0%] h-[76px]">
        <div className="absolute w-full top-[124px] right-[0%] left-[0%] h-[184px]">
          <div className="absolute w-[31.67%] top-[0px] right-[0%] left-[68.33%] shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.1),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-gray-100 h-[184px] overflow-hidden">
            <div className="absolute w-[88%] top-[112px] right-[6%] left-[6%] h-12">
              <div className="absolute top-[2px] left-[calc(50%_-_169px)] leading-[24px] inline-block w-[338px]">
                  Get detailed insights and analytics to measure your event's
                  success.
                </div>
            </div>
            <div className="absolute w-[88%] top-[76px] right-[6%] left-[6%] h-7 text-xl text-white">
              <div className="absolute top-[0px] left-[calc(50%_-_41px)] leading-[28px] font-semibold inline-block w-[83px]">
                Analytics
              </div>
            </div>
            <img
              className="absolute top-[24px] left-[calc(50%_-_18px)] w-9 h-9 overflow-hidden"
              alt=""
              src="/frame4.svg"
            />
          </div>
          <div className="absolute w-[31.67%] top-[0px] right-[34.13%] left-[34.2%] shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.1),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-gray-100 h-[184px] overflow-hidden">
            <div className="absolute w-[88%] top-[112px] right-[6%] left-[6%] h-12">
              <div className="absolute top-[2px] left-[calc(50%_-_180px)] leading-[24px] inline-block w-[360px]">
                  Manage attendees, send invites, and track RSVPs all in one
                  place.
                </div>
            </div>
            <div className="absolute top-[76px] left-[calc(50%_-_176px)] w-[352px] h-7 text-xl text-white">
              <div className="absolute top-[0px] left-[calc(50%_-_102px)] leading-[28px] font-semibold inline-block w-[255px] flex items centre">
                Attendee Management
              </div>
            </div>
            <img
              className="absolute top-[24px] left-[calc(50%_-_18px)] w-9 h-9 overflow-hidden"
              alt=""
              src="/frame5.svg"
            />
          </div>
          <div className="absolute w-[31.67%] top-[0px] right-[68.33%] left-[0%] shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.1),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-gray-100 h-[184px] overflow-hidden">
            <div className="absolute top-[112px] left-[calc(50%_-_176px)] w-[352px] h-12">
              <div className="absolute top-[2px] left-[calc(50%_-_179px)] leading-[24px] inline-block w-[359px]">
                  Easily schedule and manage your events with our intuitive
                  interface.
                </div>
            </div>
            <div className="absolute w-[88%] top-[76px] right-[6%] left-[6%] h-7 text-xl text-white">
              <div className="absolute top-[0px] left-[calc(50%_-_77px)] leading-[28px] font-semibold  w-[200px] flex items centre">
                Event Scheduling
              </div>
            </div>
            <img
              className="absolute top-[24px] left-[calc(50%_-_18px)] w-9 h-9 overflow-hidden"
              alt=""
              src="/frame6.svg"
            />
          </div>
        </div>
        <div className="absolute w-full top-[52px] right-[0%] left-[0%] h-6">
          <div className="absolute top-[0px] left-[calc(50%_-_250.5px)] leading-[24px] inline-block w-[502px]">
            Discover the features that make our event management system unique
          </div>
        </div>
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-9 text-11xl text-white ">
          <b className="absolute top-[0px] left-[calc(50%_-_58.5px)] leading-[36px] inline-block w-[118px]">
            Features
          </b>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  className: PropTypes.string,
};

export default FeatureCard;
