import React, { Component } from 'react'

export class FormFood extends Component {
    state = {
        name: "",
        calories: 0,
        image: ""
    }

    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        //changing dynamically the properties and their values
        this.setState({ [key]: value })
    }

    handleSubmit = (event) => {
        //prevent the default behavior (refreshing the page) when clicking on a submit button 
        event.preventDefault();
        //accessing the function you passed as a props to this component ang give it the state to lift up to the parent component
        this.props.addFood(this.state)
    }

    render() {

        return (
            <div>
                <h2>Add food</h2>
                <form onSubmit={this.handleSubmit} >
                    <div class="field">
                        <div class="control">
                            <input class="input is-info" name="name" type="text" placeholder="name" onChange={this.handleChange} value={this.state.name} />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input class="input is-info" name="calories" type="number" placeholder="calories" onChange={this.handleChange} value={this.state.calories} />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input class="input is-info" name="image" type="text" placeholder="image" onChange={this.handleChange} value={this.state.image} />
                        </div>
                    </div>
                    <button>Create food</button>
                </form>

            </div>
        )
    }
}

export default FormFood
