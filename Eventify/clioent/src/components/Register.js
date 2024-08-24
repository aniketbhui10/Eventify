import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";

const FormContainer = ({ className = "" }) => {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    console.log("Login button clicked"); 
    console.log({ email, password });
    try {
      const response = await axios.post("http://localhost:5000/api/users/", { username,email, password });
      console.log(response.data); 
    } catch (error) {
      console.error("Error logging in", error); 
    }
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-center text-base text-darkgray-200 font-roboto ${className}`}
    >
        
      <div className="w-96 shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.1),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_0px_0px_#000,_0px_0px_0px_#000] rounded-lg bg-gray-800 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-8 px-8 pb-[31px] box-border gap-[56px] max-w-full mq450:gap-[28px] mq450:pt-[21px] mq450:pb-5 mq450:box-border">
        <h2 className="m-0 relative text-3xl leading-[36px] font-bold font-inherit text-white mq450:text-lg mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px]">
          EventManager
        </h2>
        <div className="self-stretch h-6 relative hidden">
          
        </div>
        <div className="self-stretch justify items center flex-col items-start justify-start gap-[64px] mq450:gap-[32px] text-white">
          <form onSubmit={register} className="m-0 self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="w-full">
              <label className="block text-sm font-bold mb-2" htmlFor="password">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="johndoe55"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 py-2 text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full " >
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                
                className="w-full flex items-center px-3 py-2 text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer [border:none] py-2 pr-5 pl-[21px] bg-mediumspringgreen self-stretch rounded-lg flex flex-row items-start justify-center hover:bg-forestgreen"
            >
              <div className="relative text-base leading-[24px] font-semibold font-roboto text-white text-center inline-block min-w-[41px]">
                Signup
              </div>
            </button>
          </form>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            
          </div>
        </div>
      </div>
    </section>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
