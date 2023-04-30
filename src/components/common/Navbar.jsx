import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Logout from "../../containers/Auth/Logout";

const NavContainer = styled.div`
  box-shadow: 0px 2px 5px 0 rgb(0, 0, 0, 70%);
  z-index: 1;
  width: 15%;
  transition: all 0.4s;
  overflow: hidden;
  position: fixed;
  height: 100vh;
  background-color: white;
  @media (max-width: 1280px) {
    width: 0;
    overflow: hidden;
  }
`;

const NavItem = styled.li`
  font-size: 35px;
  margin: 20px 110px 0px 10px;
  color: #49277f;
`;

const NavItemAuth = styled.li`
  padding-top: 10px;
  color: #333;
`;

export const AuthLink = styled(Link)`
  font-size: 12px;
  color: #999;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

export const Email = styled.p`
  margin: 0 10px 0 0;
  font-size: 16px;
`;

export const NavTask = styled.div`
  color: #333;
  font-size: 20px;
  font-weight: 400;
  margin-top: 70px;
`;

export const NavTaskItem = styled.div`
  margin: 6px 10px;
  padding: 5px 8px;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  ${(props) =>
    props.active &&
    `
  background-color: #760b87;
  color: white;
  `}
  &:hover {
    background-color: #760b87;
    color: white;
  }
`;

export const NavTaskItemLink = styled(Link)`
  color: #333;
`;

const Navbar = () => {
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const location = useLocation();
  return (
    <NavContainer>
      <NavItem>
        {token ? (
          <Link style={{ color: "#760b87" }} to="/models">
            NeuralDrop
          </Link>
        ) : (
          <Link style={{ color: "#760b87" }} to="/">
            NeuralDrop
          </Link>
        )}
      </NavItem>
      <NavItemAuth>
        {token ? (
          <div>
            <div style={{ display: "flex", paddingLeft: "14px" }}>
              <Email>{email}</Email>
              <Logout />
            </div>
            <NavTask>
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#aaa",
                    margin: "0px 20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Model & Dataset
                </div>
                <NavTaskItemLink to="/models">
                  <NavTaskItem
                    active={
                      location.pathname !== "/datasets" &&
                      location.pathname !== "/modelcompression"
                    }
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Models
                  </NavTaskItem>
                </NavTaskItemLink>
              </div>
              <NavTaskItemLink to="/datasets">
                <NavTaskItem active={location.pathname === "/datasets"}>
                  Datasets
                </NavTaskItem>
              </NavTaskItemLink>
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#aaa",
                    margin: "0px 20px",
                    marginTop: "50px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Model Compressing
                </div>
                <NavTaskItemLink to="/modelcompression">
                  <NavTaskItem
                    active={location.pathname === "/modelcompression"}
                  >
                    Model Compression
                  </NavTaskItem>
                </NavTaskItemLink>
              </div>
            </NavTask>
          </div>
        ) : location.pathname === "/" ? (
          <AuthLink style={{ paddingLeft: "14px" }} to="/register">
            회원가입
          </AuthLink>
        ) : (
          <AuthLink style={{ paddingLeft: "14px" }} to="/">
            로그인
          </AuthLink>
        )}
      </NavItemAuth>
    </NavContainer>
  );
};

export default Navbar;
