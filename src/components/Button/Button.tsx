import {ButtonComponent} from "./styles";

import { ButtonProps} from "./types";

// Как типизировать props
function Button({ name, isRed = false, type = "button", onClick = () => {} }: ButtonProps) {
  return (
    <ButtonComponent disabled={true} isRed={isRed} btnColor={"red"} type={type}>
      {name}
    </ButtonComponent>
  );
}

export default Button;
