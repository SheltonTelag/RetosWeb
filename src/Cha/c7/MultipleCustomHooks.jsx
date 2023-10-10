import UseFetch from "../c6/UseFetch"
import useCounter from "../c5/useCounter"
import React from "react"

const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const [data, isLoading, hasError] = UseFetch(`https://breakingbadapi.com/api/quotes/${counter}`)

    return <>
        <h1>MultipleCustomHooks</h1>
        <hr />

        {
            isLoading ? (
                <div className="alert alert-info text center">
                    Loading...
                </div>
            ) : (
                <blockquote className="blockquote text-end">
                    <p className="mb-1"> {data[0]?.quote} </p>
                    <footer className="blockquote-footer"> {data[0]?.autor} </footer>
                </blockquote>
            )
        }
        <button onClick={increment}>next quote</button>
    </>

}

export default MultipleCustomHooks