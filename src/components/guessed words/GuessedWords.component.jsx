import React from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
/**
 * Functional stateless component that has conditional return
 * must recieve guessedWords prop of the form of array of objects
 * example of guessedWords: [
        {guessedWord: "string", letterMatchCount: 2}
    ]
 * @function
 * @param {object} props 
 * @returs {JSX.Element}
 */

export default function GuessedWordsComponent({ guessedWords = [] }) {
    return (
        <div style={{ maxWidth: 450, marginTop: 50 }}>
            {guessedWords.length < 1 ? (
                <h4 id="guessed-word-info" style={{ textAlign: "center" }}>
                    Guess the randomly, generated word
                </h4>
            ) : (
                <>
                    <h4 style={{ textAlign: "center" }}>Guessed Words</h4>
                    <Table id="guessed-words-list" striped>
                        <thead>
                            <tr>

                            <th>#</th>
                            <th>Guessed Word</th>
                            <th>Matched letters</th>
                            </tr>
                         
                            
                        </thead>
                        <tbody>
                            {guessedWords.map((data, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td className="guessed-word">
                                        {data.guessedWord}
                                    </td>
                                    <td>{data.letterMatchCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </div>
    );
}

GuessedWordsComponent.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string,
            letterMatchCount: PropTypes.number
        })
    ).isRequired
};
