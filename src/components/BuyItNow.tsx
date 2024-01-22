// BuyItNow.js
import { useState } from "react";

const BuyItNow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [address, setAddress] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleAddressSubmit = () => {
    // You can perform validation or send the address to a server here
    // For simplicity, we'll just set the greeting based on the address
    setGreeting(`Hello, ${address}!`);
    handleNext();
  };

  const isNextButtonDisabled = currentStep === 1 && address.trim() === "";
  const isPreviousButtonDisabled = currentStep === 1;

  return (
    <div className="flex justify-center mt-20">
      <ul className="steps steps-vertical lg:steps-horizontal w-full">
        <li
          className={`step ${
            currentStep === 1 ? "step-active" : "step-neutral"
          }`}
        >
          {currentStep === 1 ? (
            <div>
              <h2>Step 1: Enter your address</h2>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
              />
              <button
                onClick={handleAddressSubmit}
                disabled={isNextButtonDisabled}
              >
                Next
              </button>
            </div>
          ) : (
            "Address"
          )}
        </li>
        <li
          className={`step ${
            currentStep === 2 ? "step-active" : "step-neutral"
          }`}
        >
          {currentStep === 2 ? (
            <div>
              <h2>Step 2: Greeting</h2>
              <p>{greeting}</p>
              <div>
                <button
                  onClick={handlePrevious}
                  disabled={isPreviousButtonDisabled}
                >
                  Previous
                </button>
                <button onClick={handleNext}>Next</button>
              </div>
            </div>
          ) : (
            "Payment Mode"
          )}
        </li>
        <li
          className={`step ${
            currentStep === 3 ? "step-active" : "step-neutral"
          }`}
        >
          {currentStep === 3 ? (
            <div>
              <h2>Step 3: Additional Greeting</h2>
              <p>I am good.</p>
              <button onClick={handlePrevious}>Previous</button>
            </div>
          ) : (
            "Success"
          )}
        </li>
      </ul>
    </div>
  );
};

export default BuyItNow;
