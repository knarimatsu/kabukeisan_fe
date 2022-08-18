import { useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import Button from "../../components/Button";
const CheckStock = () => {
    const [activeStep, setActiveStep] = useState(0);

    function nextStep() {
      setActiveStep(1);
    }
    
    function previousStep() {
      setActiveStep(0);
    }
    
    return (
      <>
        <div>
          <Stepper
            steps={[
              { label: "アカウント情報" },
              { label: "ファッション情報" },
              { label: "完了" },
            ]}
            activeStep={activeStep}
          />
        </div>
        <div className="text-center">
          <span style={{ display: activeStep === 0 ? "" : "none" }}>
            <button onClick={nextStep}>次へ</button>
          </span>
          <span style={{ display: activeStep === 1 ? "" : "none" }}>
            <button onClick={previousStep}>アカウント情報へ戻る</button>
          </span>
        </div>
      </>
    );
}

export default CheckStock;