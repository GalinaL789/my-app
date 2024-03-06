import styled from "@emotion/styled";

export const EmployeeFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 70px;
  background-color: black;
`;

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: fit-content;
  padding: 60px;
  gap: 20px;
  border-radius:2px;
  background-color: white;
`;

export const EmployeeCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 470px;
  padding: 60px;
  gap: 20px;
  background-color: lightblue;
`;

export const EmployeeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EmployeeTitle = styled.p`
  font-size: 16px;
  color: blue;
`;

export const EmployeeInfoText = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: black;
`;
export const EmployeeErrorMessage = styled.p`
  font-size: 16px;
  color: red;
`;
