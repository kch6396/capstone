import styled from "styled-components";
import Dataset from "../components/common/Dataset";

export const DatasetPageForm = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin-left: 15%;
  transition: all 0.4s;
  @media (max-width: 1280px) {
    margin-left: 0;
  }
`;

const DatasetPage = () => {
  return (
    <DatasetPageForm>
      <Dataset />
    </DatasetPageForm>
  );
};

export default DatasetPage;
