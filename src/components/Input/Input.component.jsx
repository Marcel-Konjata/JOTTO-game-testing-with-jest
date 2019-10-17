import React from "react";
import PropTypes from "prop-types";
import {
    InputGroup,
    InputGroupAddon,
    Button,
    Input as BootstrapInput
} from "reactstrap";

const Input = ({ secretWord , handleCheck }) => {
    const [inputValue, setInputValue] = React.useState("");

    const handleClick = () => {
        if (inputValue) {
            handleCheck(inputValue.trim().toLowerCase(), secretWord);
            setInputValue("");
        }
    };

    return (
        <div className="custom-input" style={{ maxWidth: 500 }}>
            <InputGroup>
                <BootstrapInput
                    type="text"
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.target.value);
                    }}
                />
                <InputGroupAddon addonType="append">
                    <Button onClick={handleClick}>Guess</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};

Input.propTypes = {
    handleCheck: PropTypes.func.isRequired,
    secretWord: PropTypes.string.isRequired
};

export default Input;
