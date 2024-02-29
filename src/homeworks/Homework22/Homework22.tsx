import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { Homework22Wrapper, ButtonWrapper} from "./styles";


function Homework22()
{
  return (
    <Homework22Wrapper>
      <Button name="login" isRed={false} type="submit" onClick={() => console.log("Blue button clicked")}></Button>
      <Button name="Hello" isRed={true} type="submit" onClick={() => console.log("Blue button clicked")}></Button>
      <Button name="Bye" isRed={true} type="submit" onClick={() => console.log("Blue button clicked")} disabled={true}></Button>
      
      {/* <Button onClick={() => console.log("Red button clicked")} disabled>Red Button</Button>
      <Button disabled>Disabled Button</Button> */}
      {/* <Input value="Enabled Input" onChange={(e) => console.log(e.target.value)} /> */}  
      {/* <Input id="1234" name="XYZ" placeholder ="Disabled Input" label="mylabel" type="text"/>
      <Input id="456"  name="ABC" placeholder="Disabled Input" label="mylabel" type="text" disabled={true}/>*/}
     </Homework22Wrapper> 
  );
}

export default Homework22;