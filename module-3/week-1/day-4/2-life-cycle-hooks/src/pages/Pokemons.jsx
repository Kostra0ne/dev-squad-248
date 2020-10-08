import React from "react";
import pokemonAPI from "../api/pokemonApi";
import { Link } from "react-router-dom";
import MyTimer from "../components/MyTimer";

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      selectedPokemon: null,
    };
  }

  //   state = {
  //     pokemons: [],
  //   };

  async componentDidMount() {
    pokemonAPI
      .getPokemons()
      .then((apiResponse) => {
        setTimeout(() => {
          this.setState({ pokemons: apiResponse.data });
        }, 2000);
      })
      .catch((apiError) => {
        console.log(apiError);
      });
    // try {
    //   const apiResponse = await pokemonAPI.getPokemons();
    //   this.setState({ pokemons: apiResponse.data });
    // } catch (error) {
    //   this.setState({ error: "Tout cassé" });
    // }
  }

  componentDidUpdate() {
    console.log("I have updated !");
  }

  componentWillUnmount() {
    console.log("I have unmounted");
  }

  handleClick = (index) => {
    this.setState({ selectedPokemon: index });
  };

  render() {
    return (
      <div>
        <MyTimer />
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
