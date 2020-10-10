import React, { Component } from 'react'
import FoodBox from './FoodBox';
import FormFood from './FormFood';
import data from '../foods.json';


export default class Foods extends Component {
    state = {
        displayForm: false,
        food: data,
    }

    handleForm = () => {

        this.setState({ displayForm: !this.state.displayForm })
    }

    addFood = (stateFromChildComponent) => {
        //The following line is doing exactly the same than lines 20-21
        //const newFood =[...this.state.food, stateFromComponent]
        const newFood = [...this.state.food]
        newFood.push(stateFromChildComponent)
        //Changing the state with the new
        this.setState({ food: newFood, displayForm: false })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleForm}>Add food</button>
                {/* Guard operator to display the form */}
                {this.state.displayForm && <FormFood addFood={this.addFood} />}
                {this.state.food.map((food, i) => (
                    <FoodBox key={i} food={food} />
                ))}
            </div>
        )
    }
}

