import React from "react";
import pokemonAPI from "../api/pokemonApi";
import { Link } from "react-router-dom";

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  //   state = {
  //     pokemons: [],
  //   };

  componentDidMount() {
    console.log("I have mounted master !");

    pokemonAPI
      .getPokemons()
      .then((apiResponse) => {
        this.setState({ pokemons: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  componentDidUpdate() {
    console.log("I have updated !");
  }

  componentWillUnmount() {
    console.log("I have unmounted");
  }

  render() {
    return (
      <div>
        <h1>All the pokemons</h1>
        {this.state.pokemons.map((pokemon) => (
          <Link key={pokemon.name} to={`/pokemon/${pokemon.id}`}>
            <div>{pokemon.name}</div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Pokemons;
