import React from "react";
import pokemonAPI from "../api/pokemonApi";
import { Link } from "react-router-dom";
class OnePokemon extends React.Component {
  state = {
    pokemon: null,
  };

  componentDidMount() {
    pokemonAPI
      .getOne(this.props.match.params.id)
      .then((apiResponse) => {
        // console.log(apiResponse.data);
        this.setState({ pokemon: apiResponse.data });
      })
      .catch((error) => console.log(error));
    // console.log(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      pokemonAPI
        .getOne(this.props.match.params.id)
        .then((apiResponse) => {
          // console.log(apiResponse.data);
          this.setState({ pokemon: apiResponse.data });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    // console.log(this.props.match.params.id);
    console.log("Wohooooooo");

    return (
      <div>
        <h1>One pokemon</h1>
        {this.state.pokemon && (
          <React.Fragment>
            <Link to={`/pokemon/${Number(this.props.match.params.id) + 1}`}>
              See next Pokemon
            </Link>
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
