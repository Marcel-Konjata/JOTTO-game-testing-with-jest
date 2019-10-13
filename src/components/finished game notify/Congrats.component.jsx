import React from "react";
import PropTypes from "prop-types";
/**
 * React func component for ending game notification
 * @function
 * @param {object} props - sucees: boolean
 * @returns {JSX.Element} - Rendered component based on winning condition
 */

const Congrats = ({ succes = false }) => {
    return (
        <div>{succes ? <h2 id="succes-message">CONGRATS DUDE</h2> : null}</div>
    );
};

Congrats.propTypes = {
    succes: PropTypes.bool
};

export default Congrats;
