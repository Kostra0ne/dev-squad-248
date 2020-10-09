import React from "react";
import Form from "./components/Form";
import DogList from "./components/DogList";

import "./App.css";

class App extends React.Component {
  state = {
    dogs: [
      {
        name: "Tarak",
        image:
          "https://www.slate.fr/sites/default/files/styles/1060x523/public/Dogue_Allemand_Bleu.JPG",
        toy: "Chair",
      },
      {
        name: "Pluto",
        image:
          "https://vignette.wikia.nocookie.net/lemondededisney/images/9/90/Pluto2.jpg/revision/latest/top-crop/width/360/height/450?cb=20151221203109&path-prefix=fr",
        toy: "Shoe",
      },
      {
        name: "Rocky",
        image:
          "https://upload.chien.com/img_global/25-le-chien/10-chiens-celebres-dans-les-dessins-animes-disney/_xlight-3230_3156-rox-et-rouky-jeune-copy-disney.jpg",
        toy: "A fox",
      },
    ],
  };

  handleAdd = (dog) => {
    this.setState({
      dogs: [...this.state.dogs, dog],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>

        <div className="d-flex">
          <Form addDog={this.handleAdd} />
          <DogList dogs={this.state.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
