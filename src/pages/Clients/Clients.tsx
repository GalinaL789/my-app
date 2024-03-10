import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { UsersWrapper, UsersPageTitle, ButtonControl } from "./styles";

import Button from "components/Button/Button";
import Facebook from "./Facebook/Facebook";
import { NavContainer, StyledNavLink } from "components/Layout/styles";

function Clients() {
  const navigate = useNavigate();
  // const goFaceBook = () => {
  //   navigate("/clients/facebook");
  // };
  // const goToGoogle = () => {
  //   navigate("/clients/google");
  // };
  // const goToApple = () => {
  //   navigate("/clients/apple");
  // };
  useEffect(() => {
    return () => console.log('Component Clients unmounted')
  }, [])
  
  return (
<UsersWrapper>
<UsersPageTitle>Clients</UsersPageTitle>
<NavContainer>
          <StyledNavLink color="blue"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients/facebook"
          >
            Facebook
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients/google"
          >
            Google
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients/apple"
          >
            Apple
          </StyledNavLink>
        </NavContainer>

    
      {/* <a href="localhost:3000/clients/facebook"/> */}
      {/* <ButtonControl>
        <Button name="Go to FaceBook" onClick={goFaceBook} />
        <div></div>
        <Button name="Go to Google" onClick={goToGoogle} />
        <Button name="Go to Apple" onClick={goToApple} />
        
      </ButtonControl> */}
    </UsersWrapper>

  );
}

export default Clients;