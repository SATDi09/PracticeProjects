import { useState } from "react";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div> Your order has been delivered.</div>,
  },
];

const Stepper = () => {
  const [count, setCount] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const handleNext = () => {
    setCount((prev) => {
      if (prev === CHECKOUT_STEPS.length) {
        setIsComplete(true);
        return prev;
      } else return prev + 1;
    });
  };
  const countWidth = ((count - 1) / (CHECKOUT_STEPS.length - 1)) * 100;
  const DisplayComponent = CHECKOUT_STEPS[count - 1].Component;
  return (
    <>
      <h3>Stepper of Delivery</h3>
      <div className="stepper">
        {CHECKOUT_STEPS.map((item, i) => (
          <div
            className={
              count > i + 1 || isComplete
                ? "step complete"
                : count === i + 1
                ? "step incomplete"
                : "step"
            }
            key={i}
          >
            <div className={"step-num"}>
              {count > i + 1 || isComplete ? <span>&#10003;</span> : i + 1}
            </div>
            <div className="step-name">{item.name}</div>
          </div>
        ))}
        <div className="progressbar">
          <div style={{ width: `${countWidth}%` }} className="progress"></div>
        </div>
      </div>

      <div>
        <DisplayComponent />
        {!isComplete && (
          <button onClick={handleNext}>
            {count === CHECKOUT_STEPS.length ? "Complete it!" : "Next"}
          </button>
        )}
      </div>
    </>
  );
};
export default Stepper;
