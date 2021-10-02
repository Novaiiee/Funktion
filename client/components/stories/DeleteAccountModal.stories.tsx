import { Meta, Story } from "@storybook/react";
import { useThemeContext } from "../../hooks/useThemeContext";
import { DeleteAccountModal } from "../DeleteAccountModal";

export const Default: Story = (props) => {
	return <DeleteAccountModal {...props} />;
};

export const Dark: Story = (props) => {
  const { setDark } = useThemeContext();
  setDark(true);
  
  return <DeleteAccountModal {...props} />;
}

const component = {
  title: "DeleteAccountModal",
  component: DeleteAccountModal
} as Meta; 

export default component;
