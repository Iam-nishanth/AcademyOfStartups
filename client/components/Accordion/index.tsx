import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  AccordionSection,
  Container,
  Dropdown,
  Question,
  Wrap,
} from "@/styles/components/AccordionStyles";
import { data } from "./questions";

interface DataItem {
  question: string;
  answer: string;
}

const Accordion: React.FC = (): JSX.Element => {
  const [clicked, setClicked] = useState<number | null>(null);

  const toggle = (index: number): void => {
    if (clicked === index) {
      // if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <AccordionSection>
        <Container>
          {data.map((item: DataItem, index: number) => (
            <Question key={index}>
              <Wrap onClick={() => toggle(index)}>
                <h1>{item.question}</h1>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p>{item.answer}</p>
                </Dropdown>
              ) : null}
            </Question>
          ))}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
