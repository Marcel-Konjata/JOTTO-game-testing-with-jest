import React from "react";
import { Button } from "reactstrap";
const GiveUp = ({ secretWord }) => {
    const [givedIn, setGivedIn] = React.useState(false);
    return (
        <div style={{ maxWidth: 450, textAlign: "center", marginTop: 80 }}>
            <Button
                onClick={() => {
                    setGivedIn(true);
                }}
                size="sm"
                color="danger"
            >
                I want to give Up
            </Button>
            {givedIn ? (
                <>
                    <h4>Shame on you, never give up!</h4>
                    <p>
                        anyway the word that you are looking for is{" "}
                        <span style={{ fontWeight: "bold" }}>{secretWord}</span>
                    </p>
                </>
            ) : null}
        </div>
    );
};

export default GiveUp;
