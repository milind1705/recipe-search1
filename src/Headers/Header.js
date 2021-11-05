import styled from "styled-components";
export const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-between;
`;

export const AppnameComponent = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
  width: 50%;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 25px;
  font-weight: bold;
`;
