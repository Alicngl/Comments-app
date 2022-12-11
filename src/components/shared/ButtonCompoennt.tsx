import { Button } from "@chakra-ui/react";

function ButtonComponent({ title, onclick, disabled }) {
  return <Button onClick={onclick} disabled={disabled}>{title}</Button>;
}
export default ButtonComponent;
