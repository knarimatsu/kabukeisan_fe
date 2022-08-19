import { useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import Button from "../../components/Button";
import CheckStockForms from "./CheckStockForms";
const CheckStock = () => {
    const [activeStep, setActiveStep] = useState(0);

    const stepLabels = [
        { label: "独占力"},
        { label: "変化"},
        { label: "財務諸表"},
        { label: "経営"},
        { label: "製品"},
    ];

    function nextStep() {
      setActiveStep(activeStep + 1);
    }

    function previousStep() {
      setActiveStep(activeStep - 1);
    }
    console.log(activeStep);
    return (
      <>
        <div>
          <Stepper steps={stepLabels}  activeStep={activeStep} className="text-sm" />
        </div>
        
        <div className="text-center">
          <span style={{ display: activeStep !== 4 ? "" : "none" }}>
            <button onClick={nextStep}>次へ</button>
          </span>
          <span style={{ display: activeStep !== 0 ? "" : "none" }}>
            <button onClick={previousStep}>戻る</button>
          </span>
          <span style={{ display: activeStep === 4 ? "" : "none" }}>
            <button onClick={() => alert("チェックします")}>チェック</button>
          </span>
        </div>
        <CheckStockForms />
      </>
    );
};

export default CheckStock;