import styled from "styled-components";

const HeaderForm = styled.div`
  /* border-bottom: 1px solid black; */
  box-shadow: 2px 2px 2px 0 rgb(0, 0, 0, 40%);
  width: 100%;
`;

const Title = styled.div`
  padding: 18px;
  font-size: 18px;
  /* font-weight: bold; */
`;
const Header = () => {
  return (
    <HeaderForm>
      <Title>Task Management</Title>
    </HeaderForm>
  );
};

export default Header;
