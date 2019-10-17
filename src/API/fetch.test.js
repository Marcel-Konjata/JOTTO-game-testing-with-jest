
import { fetchRandomWord } from "./fetch";

describe("check if the fetch func runs correctly", () => {
  let data;
  beforeEach( async ()=>{
     data = await fetchRandomWord();

  })
    test('should return data', () => {
        expect(data).toHaveLength(1)
    })
    
});
