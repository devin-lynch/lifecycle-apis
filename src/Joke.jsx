import React, { Component } from 'react'
import axios from 'axios'

export default class Joke extends Component {

    state = {
        joke: ''
    }

    // runs only once -- when the component is first being created and mounted on the virtual dom
    componentDidMount() {
        // most commonly used lifecycle method!
        // used for getting API info to display on page load!
        const options = {
            headers: {
                Accept: 'application/json'
            }
        }
        axios.get('https://icanhazdadjoke.com/', options)
            .then(response => {
                console.log('the API has responded!')
                this.setState({ joke: response.data.joke })
            })
            .catch(console.warn)
    }

    componentDidUpdate() {}

    componentWillUnmount() {}

    handleChangeJoke = () => {
        const options = {
            headers: {
                Accept: 'application/json'
            }
        }
        axios.get('https://icanhazdadjoke.com/', options)
            .then(response => {
                console.log('the API has responded!')
                this.setState({ joke: response.data.joke })
            })
            .catch(console.warn)
    }

    render() {
        console.log('Joke.js is rendering!')
        return (
            <div>
                <h1>Bad joke:</h1>

                <p>{this.state.joke}</p>

                <button
                    onClick={this.handleChangeJoke}
                >
                    another bad joke
                </button>
            </div>
        )
    }
}