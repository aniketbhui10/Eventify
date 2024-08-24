import Register from "../components/Register"
import{Link} from "react-router-dom"

const Root = () => {


    




  return (
   
    <div className="w-full relative bg-gray-300 flex flex-col items-end justify-start pt-[29px] px-7 pb-[197px] box-border gap-[119px] leading-[normal] tracking-[normal] mq450:gap-[30px] mq675:gap-[59px]">
    <Link to="/root">
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/x.svg"
        
      />
      </Link>
      <Register />
    </div>
    
  )

};

export default Root;
