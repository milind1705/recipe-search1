import styled from "styled-components";

export const ReciepeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`;
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
  width: 300px;
`;

export const CoverImg = styled.img`
  height: 200px;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;
export const Ingredients = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: green;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;
export const FullRecipe = styled(Ingredients)`
  border: solid 1px red;
  color: red;
`;
