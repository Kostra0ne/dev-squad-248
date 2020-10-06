import React from "react";
// import toto from "../data/heroes.json";
import heroesData from "../data/heroes.json";
import "../styles/Heroes.css";

class Heroes extends React.Component {
  state = {
    heroes: heroesData,
  };

  deleteHero = (i) => {
    // this.state.heroes.splice(i, 1);

    // Method 1 with spread copy
    // const copy = [...this.state.heroes];
    // copy.splice(i, 1);

    // this.setState({
    //   heroes: copy,
    // });

    // Method 2 with filter

    this.setState({
      heroes: this.state.heroes.filter((hero, index) => {
        return index !== i;
      }),
    });

    // heroesData.splice(i, 1);
    // console.log(heroesData);
    // console.log(event.target);
    // console.log("clickity click");
    // console.log(this.state.clickedHero);
  };

  render() {
    return (
      <div className="Heroes">
        {/* Not rendered in react */}

        {false}
        {undefined}
        {null}

        {/* Rendered in react */}

        {NaN}
        {0}

        {this.state.heroes.map((hero, i) => (
          <div
            key={i}
            style={{ backgroundColor: hero.isGood ? "dodgerblue" : "tomato" }}
            className="card"
          >
            <h1>{hero.name}</h1>
            {hero.isGood && <div>This is good boy</div>} {/* guard operator */}
            {!hero.isGood && <div>This is bad boy</div>}
            {hero.isGood ? (
              <div>This is good boy</div>
            ) : (
              <div>This is bad boy</div>
            )}
            <img src={hero.imageUrl} alt={hero.name} />
            <button onClick={(event) => this.deleteHero(i)}>
              {/* In order to pass a value to an event handler
                                                                            you need to create an anonymous function */}
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Heroes;
