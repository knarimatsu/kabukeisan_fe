import React from "react";

type ToggleSwitchProps = {
    isFirstLabel: boolean;
    firstLabel: string;
    secondLabel: string;
    changeState: React.Dispatch<React.SetStateAction<boolean>>;
};
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isFirstLabel,
  firstLabel,
  secondLabel,
  changeState,
}) => {
  return (
    <>
      <div className="flex justify-center text-center">
        <div
          className={`w-32
                        bg-${isFirstLabel ? "[#2e7d32]" : ""}
                        text-${isFirstLabel ? "white" : ""}
                        px-2 py-0.5
                        rounded-l-lg
                        border-t border-l border-b
                        cursor-pointer
                    `}
          onClick={() => changeState(true)}
        >
          {firstLabel}
        </div>
        <div
          className={`
                        w-32
                        bg-${isFirstLabel ? "" : "[#2e7d32]"}
                        text-${isFirstLabel ? "" : "white"}
                        px-2 py-0.5
                        rounded-r-lg
                        border
                        cursor-pointer
                    `}
          onClick={() => changeState(false)}
        >
          {secondLabel}
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
