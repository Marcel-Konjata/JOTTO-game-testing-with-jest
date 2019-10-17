import React from "react";
import { shallow } from "enzyme";
import Input from "./Input.component";

const mockProps = {
    secretWord: "",
    handleCheck: () => {}
};

const InputComponentWrapper = () => {
    return shallow(<Input {...mockProps} />);
};

test("Component render without crash", () => {
    expect(InputComponentWrapper()).toHaveLength(1);
});
test("Inner Jsx is rendered", () => {
    const InputDiv = InputComponentWrapper().find(".custom-input");
    expect(InputDiv).not.toHaveLength(0);
});

describe("state controlled input", () => {
    let mockSetInputVal = jest.fn();

    beforeEach(() => {
        mockSetInputVal.mockClear();
        React.useState = jest.fn(() => ["", mockSetInputVal]);
    });

    test("input on change renders correctly", () => {
        const InputField = InputComponentWrapper().find("input");
        InputField.simulate("change", { target: { value: "sexyTest" } });

        expect(mockSetInputVal).toHaveBeenCalledWith("sexyTest");
    });

    test("button submit clears input", () => {
        const submitButton = InputComponentWrapper().find("button");
        submitButton.simulate("click");
        expect(mockSetInputVal).toHaveBeenCalledWith("");
    });
});


