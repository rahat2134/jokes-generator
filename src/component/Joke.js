import React, {useState } from 'react'
import './joke.css';

function JokeGenerator() {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false); // Add this line

    /**
     * Sure, let's simplify it!
        Imagine you're making a cake. The cake is your React component, and the ingredients are the data you want to fetch from an API.
        Using `useEffect` is like deciding when to go to the store to buy ingredients. You want to go to the store once when you start making the cake, not every time you stir it.
        If you don't use `useEffect`, it's like going to the store every time you stir the cake. It's unnecessary and might make too many trips to the store, wasting time and energy.
        So, `useEffect` helps you fetch data at the right time - when you start making your component - so you have the ingredients (data) ready to use without any extra trips to the store (unnecessary fetches).
    */

        const fetchJoke = () => {
            setLoading(true); // Set loading to true when the fetch starts
        /**
         * fetch the jokes from the url.
         * This api has `category` which represents category of joke and `joke`.
         *  */
        const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('404 resources not found.');
                }
                return response.json();
            })
            .then(data => {
                setJoke(data.joke);
                setLoading(false); // Set loading to false when the fetch completes
            })
            .catch(Error => {
                console.error('Something went wrong!');
            })
        }

    return(
        <div className='body-box'>
            <h1>Joke Generator</h1>
            {/* By this joke will be set in joke variable. */}
            <button onClick={fetchJoke}>Click to generate a joke.</button>
            {loading ? <p>Loading...</p> : joke && <p className='joke-container'>{joke}</p>}
            {/*if joke is present then only display the joke.*/}
    
        </div>
    )
}

export default JokeGenerator;