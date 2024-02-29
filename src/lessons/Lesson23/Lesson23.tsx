import {
    Lesson23Wrapper,
    ContainerWrapper,
    BoxBlueContainer,
    BoxGreenContainer,
    BoxRedContainer,
    InputComponent,
    
  } from "./styles";
  
  function Lesson23() {
    return (
      <Lesson23Wrapper>
        <ContainerWrapper>
          <BoxBlueContainer>Blue box</BoxBlueContainer>
          <BoxGreenContainer>Green box</BoxGreenContainer>
          <BoxRedContainer>Red box</BoxRedContainer>
        </ContainerWrapper>
  
        <InputComponent placeholder="Enter something" />
      </Lesson23Wrapper>
    );
  }
  
  export default Lesson23;