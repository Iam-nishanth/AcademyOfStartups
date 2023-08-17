import { Collapse, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

type ExpandIconPosition = "start" | "end";

interface FAQProps {
  items: Array<{ label: string; children: string; key: number }>;
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [expandIconPosition, setExpandIconPosition] =
    useState<ExpandIconPosition>("start");

  const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  return (
    <>
      <Collapse
        defaultActiveKey={["1"]}
        expandIconPosition={expandIconPosition}
        items={items}
      />
    </>
  );
};

export default FAQ;
