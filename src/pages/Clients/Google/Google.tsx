import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { UsersWrapper, UsersPageTitle, ButtonControl } from "./styles";

import Button from "components/Button/Button";


function Google() {
    const navigate = useNavigate();
    const goToClients = () => {
        navigate("/clients");    
      };
    return (
        <UsersWrapper>     
 <UsersPageTitle>Google</UsersPageTitle>
     <ButtonControl>
     <Button name="Go to Clients page" onClick={goToClients} />
    </ButtonControl>
    </UsersWrapper>
    )
  }
  
  export default Google;
  