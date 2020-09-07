import React from 'react';
import store from '../store'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PokemonList from '../components/PokemonList/PokemonList'
import Pokemon from '../components/Pokemon/Pokemon'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 60%;
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <StyledWrapper>
          <Navbar />
            <Switch>
              <Route path={"/"} exact component={PokemonList}/>
              <Route path={"/pokemon/:pokemon"} exact component={Pokemon}/>
              <Redirect to={"/"} />
            </Switch>
        </StyledWrapper>
        <Footer/>
      </Provider>
    </BrowserRouter>
  );
}

export default Root;
