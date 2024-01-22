// BuyItNow.js
// import { useState } from "react";

const BuyItNow = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  // const [address, setAddress] = useState("");
  // const [greeting, setGreeting] = useState("");

  // const handleNext = () => {
  //   setCurrentStep(currentStep + 1);
  // };

  // const handlePrevious = () => {
  //   setCurrentStep(currentStep - 1);
  // };

  // const handleAddressSubmit = () => {
  //   // You can perform validation or send the address to a server here
  //   // For simplicity, we'll just set the greeting based on the address
  //   setGreeting(`Hello, ${address}!`);
  //   handleNext();
  // };

  // const isNextButtonDisabled = currentStep === 1 && address.trim() === "";
  // const isPreviousButtonDisabled = currentStep === 1;

  return (
    <div className="flex justify-center flex-col">
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum
        reiciendis omnis corporis delectus natus tempore aperiam ipsam quasi,
        magnam neque nemo debitis magni, culpa mollitia voluptatum doloribus
        velit amet consectetur doloremque ut illo voluptates labore ipsa. Unde
        quia consequatur quos nostrum. Animi beatae cum temporibus,
        necessitatibus delectus enim ipsum praesentium tenetur dolor veniam esse
        quis soluta voluptatem vero quasi voluptas neque eos hic nisi ex
        distinctio, sit autem et? Explicabo nobis voluptatem dignissimos aut
        quas molestias ad blanditiis in nam iusto quos deleniti aspernatur
        voluptatum hic ipsum repellendus, incidunt vel, libero accusamus eius
        obcaecati quisquam asperiores ex similique. Laboriosam labore quaerat
        recusandae officiis voluptate, repellendus aperiam nobis reprehenderit
        facilis ull
      </div>
    </div>
  );
};

export default BuyItNow;
