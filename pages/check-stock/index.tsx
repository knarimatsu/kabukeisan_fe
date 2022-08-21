import { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckStockCard from "./CheckStockCard";

const CheckStock = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isCompleted, setIsCompleted] = useState<{[k: number]: boolean}>({});

    const stepLabels = [
        { label: "独占力"},
        { label: "変化"},
        { label: "財務諸表"},
        { label: "経営"},
        { label: "製品"},
    ];

    const totalStep = () => { return stepLabels.length; };

    const completedSteps = () => {
        return Object.keys(isCompleted).length ;
    };

    const isLastStep = () => {
        return completedSteps() === totalStep();
    };
    const allStepsCompleted = () => {
        return completedSteps() === totalStep();
    };

    const handleNext = () => {
        const newActiveStep = 
            isLastStep() && !allStepsCompleted() ? stepLabels.findIndex((step, i) => !(i in isCompleted)) : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = isCompleted;
        newCompleted[activeStep] = true;
        setIsCompleted(newCompleted);
        handleNext();
    };

    const submitCompanyCheckInfo = () => {
        const newCompleted = isCompleted;
        newCompleted[activeStep] = true;
        setIsCompleted(newCompleted);
        // handleNext();
        alert('完了');
        setActiveStep(0);
        setIsCompleted({});
    };

    return (
      <>
          <Stepper nonLinear activeStep={activeStep}>
            {stepLabels.map((label, index) => (
              <Step key={label.label} completed={isCompleted[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label.label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <CheckStockCard activeStep={activeStep} next={handleComplete} back={handleBack} done={submitCompanyCheckInfo}/>
      </>
    );
};

export default CheckStock;