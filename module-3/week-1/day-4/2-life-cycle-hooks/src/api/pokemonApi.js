import axios from "axios";

const service = axios.create({
  baseURL: "https://ironhack-pokeapi.herokuapp.com/pokemon",
});

export default {
  service,

  getPokemons() {
    return service.get("/");
  },
  getOne(id) {
    return service.get("/" + id);
  },
};

// import axios from "axios";

// class pokemonAPI {
//   constructor() {
//     this.service = axios.create({
//       baseURL: "https://ironhack-pokeapi.herokuapp.com/pokemon",
//     });
//   }

//   getPokemons() {
//     return this.service.get("/");
//   }
// }

// export default pokemonAPI;
