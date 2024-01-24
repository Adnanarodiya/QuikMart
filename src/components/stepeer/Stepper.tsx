import { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import Profile from "../Profile";
const Stepper = () => {
  const steps = ["Address", "Payment Info", "Success"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between w-4/5 ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-black">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <div className="w-4/5">
          <div className="text-black  ">
            {currentStep === 1 && (
              <div className="">
                <Profile />
              </div>
            )}
          </div>
          <div className="flex justify-between w-4/5 items-center mx-auto">
            {currentStep > 1 && (
              <button
                className="btn"
                onClick={() => {
                  currentStep === steps.length
                    ? setComplete(true)
                    : setCurrentStep((prev) => prev - 1);
                }}
              >
                {currentStep === steps.length ? "Finish" : "prev"}
              </button>
            )}

            <button
              className="btn"
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
            >
              {currentStep === steps.length ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Stepper;
