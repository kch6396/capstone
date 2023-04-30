import Navbar from "./Navbar";

const Authentication = (props) => {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Authentication;
