import React from "react";
import { Accordion } from "@mantine/core";

const FAQ = () => {
  return (
    <div className="w-screen h-96">
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">FAQs</h1>

      <Accordion className="bg-primary text-secondary">
        <Accordion.Item value="jbjw">
          <Accordion.Control className="text-secondary font-semibold">
            What should I consider when buying a new car?
          </Accordion.Control>
          <Accordion.Panel>
            When buying a new car, there are several factors to consider such as
            your budget, your driving needs, the car's fuel efficiency, safety
            features, and maintenance costs. It's important to do your research,
            compare models, and test drive cars before making a decision.
            Additionally, consider the resale value of the car in case you
            decide to sell it in the future.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item value="customization">
          <Accordion.Control>
            Can I finance a car purchase through the dealership?
          </Accordion.Control>
          <Accordion.Panel>
            Yes, most dealerships offer financing options for car purchases. You
            can either finance through the dealership or through a third-party
            lender. It's important to compare interest rates and terms to find
            the best option for you. Keep in mind that a higher interest rate
            can result in a higher monthly payment and more interest paid over
            the life of the loan.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item value="customization">
          <Accordion.Control>
            What should I do before I trade in my old car?
          </Accordion.Control>
          <Accordion.Panel>
            Before trading in your old car, do some research on its value. This
            can help you negotiate a fair trade-in price with the dealership.
            Additionally, clean and tidy up your car, fix any minor issues, and
            gather all necessary paperwork such as the title, registration, and
            maintenance records. Finally, remove all personal belongings from
            the car and cancel any services or subscriptions associated with the
            vehicle.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
