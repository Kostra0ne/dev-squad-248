import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    image: "",
    toy: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addDog(this.state);

    this.setState({
      name: "",
      image: "",
      toy: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div>
          <label htmlFor="name">Dog name</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="image"
            name="image"
          />
        </div>
        <div>
          <label htmlFor="toy">its toy</label>
          <input type="text" id="toy" name="toy" onChange={this.handleChange} />
        </div>
        <button>Submit your dog</button>
      </form>
    );
  }
}
export default Form;
