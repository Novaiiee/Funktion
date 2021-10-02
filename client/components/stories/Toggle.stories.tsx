import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import { Toggle, ToggleProps } from "../Toggle";

export const Default: Story<ToggleProps> = (props) => {
  const [enabled, setEnabled] = useState(false);
  return <Toggle {...props} setEnabled={setEnabled} enabled={enabled} />;
};

const component = {
  title: "Toggle",
  component: Toggle,
} as Meta<ToggleProps>; 

export default component;
