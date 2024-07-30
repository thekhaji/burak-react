// @ts-nocheck
import { colors } from "@mui/material";
import React, {Component} from "react";

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
        };
    }
    
    changeDetail = () => {
        this.setState({
            color: "blue",
            brand: "Tesla",
            model: "Model S",
            year: 2023,
        });
    }

    componentDidMount(): void {
        console.log("componentDidMount");
        // runs after first render => Retrieve data from backend server
    }

    componentWillUnmount(): void {
        console.log("componentWillUnmount");
        // runs before component unmount
    }

    componentDidUpdate(): void {
        
    }

    render() {
        return(
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    Color: {this.state.color} - Model: {this.state.model} from{" "}
                    {this.state.year}
                </p>
                <button type="button" onClick={this.changeDetail}>
                    Change Detail
                </button>
            </div>
        )
    }
}

export default Test;