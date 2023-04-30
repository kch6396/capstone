import { useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderForm = styled.div`
  /* border-bottom: 1px solid black; */
  box-shadow: 2px 2px 2px 0 rgb(0, 0, 0, 40%);
  width: 100%;
  background-color: white;
`;

const Title = styled.div`
  padding: 18px;
  font-size: 18px;
  font-weight: 500;
`;
const Header = () => {
  const location = useLocation();

  return (
    <HeaderForm>
      <Title>
        {location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)}
      </Title>
    </HeaderForm>
  );
};

export default Header;
