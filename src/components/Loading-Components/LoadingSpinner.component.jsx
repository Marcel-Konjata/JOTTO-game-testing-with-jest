import React from "react";
import { Spinner } from "reactstrap";

const LoadingSpinner = () => {
    return (
        <div>
            <Spinner color="secondary" style={{ width: 40, height: 40 }} />
        </div>
    );
};

export default LoadingSpinner;
