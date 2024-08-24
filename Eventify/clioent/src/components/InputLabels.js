import { useMemo } from "react";
import PropTypes from "prop-types";

const InputLabels = ({
  className = "",
  email,
  youexamplecomPlaceholder,
  propPadding,
}) => {
  const inputLabelsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-sm text-darkgray-200 font-roboto ${className}`}
      style={inputLabelsStyle}
    >
      <div className="relative leading-[20px] font-medium inline-block min-w-[35px]">
        {email}
      </div>
      <div className="self-stretch rounded-lg bg-gray-100 flex flex-row items-start justify-start pt-1.5 pb-2 pr-0 pl-3 border-[1px] border-solid border-darkslategray">
        <input
          className="w-full [border:none] [outline:none] font-roboto text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-darkgray-100 text-left inline-block min-w-[184px] whitespace-nowrap p-0"
          placeholder={youexamplecomPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

InputLabels.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  youexamplecomPlaceholder: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default InputLabels;
