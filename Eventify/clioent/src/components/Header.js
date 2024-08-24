import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-full top-[0px] right-[0%] left-[0%] shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.1),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] bg-gray-200 h-16 overflow-hidden text-left text-base text-darkgray-200 font-roboto ${className}`}
    >
      <img
                className="absolute w-8 h-8 top-[50%] right-[50px] translate-y-[-50%]"
                alt=""
                src="/frame11.svg"
              />
      <div className="absolute w-[91.21%] top-[0px] right-[4.35%] left-[4.43%] h-16">
        <div className="absolute w-[97.22%] top-[0px] right-[1.39%] left-[1.39%] h-16">
        
          <div className="absolute w-[23.75%] top-[0px] right-[0.09%] left-[76.16%] h-16">
            
            <div className="absolute w-[27.07%] top-[calc(50%_-_28px)] right-[0%] left-[72.93%] h-14">
            
              <Link to="/root" className="absolute w-[79.17%] top-[calc(50%_-_12px)] left-[11.11%]  leading-[24px] text-center font-semibold flex justify-center items-center bg-gray-200  text-white rounded-lg hover:bg-mediumspringgreen hover:text-white hover:cursor-pointer" style={{ textDecoration: 'none',fontSize:'14px'}}>
                Login
              </Link>
            </div>
            <div className="absolute w-[22.18%] top-[calc(50%_-_28px)] right-[28.57%] left-[49.25%] h-14">
              <button className=" absolute w-[79.17%] top-[calc(50%_-_12px)] left-[11.11%] leading-[24px] text-center font-semibold flex justify-center items-center bg-gray-200  text-white rounded-lg hover:bg-mediumspringgreen hover:text-white hover:cursor-pointer">
                About
              </button>
            </div>
            <div className="absolute w-[24.06%] top-[calc(50%_-_28px)] right-[52.26%] left-[23.68%] h-14">
              <button className="absolute w-[79.17%] top-[calc(50%_-_12px)] left-[11.11%] leading-[24px] text-center font-semibold flex justify-center items-center bg-gray-200  text-white rounded-lg hover:bg-mediumspringgreen hover:text-white hover:cursor-pointer">
                Events
              </button>
            </div>
            <div className="absolute w-[22.18%] top-[calc(50%_-_30px)] right-[77.82%] left-[0%] h-[60px] text-white">
              <div className="absolute top-[0px] left-[0px] w-[59px] h-[60px]">
                
              </div>
              <button className="absolute w-[79.17%] top-[calc(50%_-_12px)] left-[11.11%] leading-[24px] text-center font-semibold flex justify-center items-center bg-gray-200  text-white rounded-lg hover:bg-mediumspringgreen hover:text-white hover:cursor-pointer">
                Home
              </button>
            </div>
          </div>
          <div className="absolute w-[15.45%] top-[0px] right-[84.55%] left-[0%] h-16 text-lg text-white">
            <img
              className="absolute w-full h-full object-cover"
              alt=""
              src="/frame9.svg"
            />
            </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
