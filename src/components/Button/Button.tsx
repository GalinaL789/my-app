import {ButtonComponent} from "./styles";

import { ButtonProps} from "./types";

// Как типизировать props
function Button({ name, isRed = false, type = "button", onClick = () => {} }: ButtonProps) {
  return (
    <div>
      <p><button onclick="alert()">Click me</button></p>
    <ButtonComponent disabled={true} isRed={isRed} btnColor={"red"} type={type} onClick={()=>{console.log("bye")}}>
      {name}
    </ButtonComponent> </div>
  );
}

export default Button;
