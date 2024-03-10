import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { UsersWrapper, UsersPageTitle, ButtonControl } from "./styles";

import Button from "components/Button/Button";

function Facebook() {
  const navigate = useNavigate();

  const goToClients = () => {
    navigate("/clients");
  };
  
  useEffect(() => {
    return () => console.log('Component Facebook unmounted')
  }, [])
  
  return (
    <UsersWrapper>
      <UsersPageTitle>Facebook</UsersPageTitle>
      <ButtonControl>
        <Button name="Go to Clients page" onClick={goToClients} />
      </ButtonControl>
    </UsersWrapper>
  );
}

export default Facebook;