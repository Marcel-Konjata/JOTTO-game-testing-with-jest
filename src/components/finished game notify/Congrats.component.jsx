import React from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
/**
 * React func component for ending game notification
 * @function
 * @param {object} props - sucees: boolean
 * @returns {JSX.Element} - Rendered component based on winning condition
 */

const Congrats = ({ succes = false }) => {
    return (
        <div>
            {succes ? (
                <Alert color="success">
                    <h4>You did it!</h4>
                    <span id="succes-message">Grats dude, you guessed correct word!</span>
                </Alert>
            ) : null}
        </div>
    );
};

Congrats.propTypes = {
    succes: PropTypes.bool
};

export default Congrats;
