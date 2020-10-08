import React from "react";
import pokemonAPI from "../api/pokemonApi";

class OnePokemon extends React.Component {
  state = {
    pokemon: null,
  };

  componentDidMount() {
    pokemonAPI
      .getOne(this.props.match.params.id)
      .then((apiResponse) => {
        console.log(apiResponse.data);
        this.setState({ pokemon: apiResponse.data });
      })
      .catch((error) => console.log(error));
    // console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>One pokemon</h1>
        {this.state.pokemon && (
          <React.Fragment>
            <p>{this.state.pokemon.name}</p>
            <p>{this.state.pokemon.cname}</p>
            <img
              src={this.state.pokemon.picture}
              alt={this.state.pokemon.name}
            />
            <pre>{JSON.stringify(this.props, null, 2)}</pre>{" "}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default OnePokemon;
