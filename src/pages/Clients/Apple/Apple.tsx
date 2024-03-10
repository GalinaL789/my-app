import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { UsersWrapper, UsersPageTitle, ButtonControl } from "../Google/styles";

import Button from "components/Button/Button";

function Apple() {
  const navigate = useNavigate();

  const goToClients = () => {
    navigate("/clients");
  };
  
  useEffect(() => {
    return () => console.log('Component Apple unmounted')
  }, [])
  
  return (
    <UsersWrapper>
      <UsersPageTitle>Apple</UsersPageTitle>
      <ButtonControl>
        <Button name="Go to Clients page" onClick={goToClients} />
      </ButtonControl>
    </UsersWrapper>
  );
}

export default Apple;