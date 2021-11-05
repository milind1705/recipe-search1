import styled from "styled-components";
import React, { useState } from "react";
import Axios from "axios";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {
  Header,
  AppnameComponent,
  SearchComponent,
  SearchInput
} from "./Headers/Header";

import {
  ReciepeListContainer,
  RecipeContainer,
  CoverImg,
  RecipeName,
  Ingredients,
  FullRecipe
} from "./Recipe/RecipeComponent";

const PlaceHolder = styled.div`
  height: 40px;
  width: 30px;
`;
const RecipeComponents = (props) => {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;

  return (
    <>
      <Dialog open={show}>
        <>
          <DialogTitle>Ingrediants</DialogTitle>
          <DialogContent>
            <table>
              <thead>
                <th>Ingredients</th>
                <th>Weight</th>
              </thead>
              <tbody>
                {recipeObj.ingredients.map((ingredientObj) => (
                  <tr>
                    <td>{ingredientObj.text}</td>
                    <td>{ingredientObj.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <Ingredients onClick={() => window.open(recipeObj.url)}>
              See more
            </Ingredients>
            <FullRecipe onClick={() => setShow("")}>close</FullRecipe>
          </DialogActions>
        </>
      </Dialog>
      <RecipeContainer>
        <CoverImg src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <Ingredients onClick={() => setShow(true)}>See ingredient</Ingredients>
        <FullRecipe onClick={() => window.open(recipeObj.url)}>
          See full reciepe
        </FullRecipe>
      </RecipeContainer>
    </>
  );
};
const API_ID = "254a2a2a";
const API_KEY = "c2e514271c4621dc8f03974b4bd6cd8d";

export default function App() {
  const [timeoutId, updatetimeoutId] = useState();
  const [recipeList, updaterecipeList] = useState([]);
  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    updaterecipeList(response.data.hits);
    //console.log(response)
  };
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 1000);
    updatetimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppnameComponent>
          <img src="https://img.icons8.com/doodle/48/000000/pizza--v1.png" />
          Reciepe Finder
        </AppnameComponent>
        <SearchComponent>
          <img src="https://img.icons8.com/material-outlined/50/000000/search.png" />
          <SearchInput
            placeholder="Search Recipe"
            onChange={onTextChange}
          ></SearchInput>
        </SearchComponent>
      </Header>
      <ReciepeListContainer>
        <RecipeContainer>
          {recipeList.length ? (
            recipeList.map((recipeObj) => (
              <RecipeComponents recipeObj={recipeObj.recipe} />
            ))
          ) : (
            <PlaceHolder>
              <img src="https://img.icons8.com/doodle/48/000000/pizza--v1.png" />
            </PlaceHolder>
          )}
        </RecipeContainer>
      </ReciepeListContainer>
    </Container>
  );
}
