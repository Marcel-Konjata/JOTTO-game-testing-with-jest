import { getNumberOfCorrectLetters } from "./getNumberOfCorrectLetters";

//unit test for checking number of correct letters in guess
test("get correct number of lettes", () => {
    //test for simple count without double letter in same order
    const firstNumber = getNumberOfCorrectLetters("train", "pain");
    expect(firstNumber).toBe(3);
});

test("ignore double letters ", () => {
    //test for double letters
    const secondNumber = getNumberOfCorrectLetters("bab", "kebab");
    expect(secondNumber).toBe(2);
});

test("ingore order of letters", () => {
    //test for out of order letters
    const thirdNumber = getNumberOfCorrectLetters("kci", "slick");
    expect(thirdNumber).toBe(3);
});
