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

    // runs everytime the component is being re-rendered
    componentDidUpdate() {
        // setting state here can cause an infinite loop
        console.log('Joke.js did update')
        // always will have access to accurate state information
        console.log('Joke.js\'s current state:', this.state)
    }

    // runs when the component is unmounted -- before the next render but after state has been changed
    componentWillUnmount() {
        console.info('Joke.js is unmounting!')
    }

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