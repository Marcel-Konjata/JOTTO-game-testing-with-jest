import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats.component";


//necessary config to work with enzyme
Enzyme.configure({ adapter: new EnzymeReactAdapter() });

// for reusability declared outside of test tests
/**
 * @function
* @param {props} object not required if no props are passed
 * @returns enzyme shallow render function
 */

const CongratsComponent = (props = {}) => shallow(<Congrats {...props} />);

//intial test
test("congrats render without crash", () => {
    expect(CongratsComponent()).toHaveLength(1);
});

test("renders when succes prop is false", () => {
    expect(CongratsComponent({succes: false})).toHaveLength(1)
});

test("renders succes message when succes prop is true", () => {
    //find node with specific id (TDD or can be done backwards without id )
    const SucceMessage = CongratsComponent({succes:true}).find('#succes-message')
    //test if the node exist
    expect(SucceMessage).toHaveLength(1)
    console.log(SucceMessage.debug())
});

