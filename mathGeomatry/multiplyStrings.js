//NOT DONE YET
const numbInt = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const multiplyStrings = (num1 = "", num2 = "") => {
    let n = num1.length;
    for (let i = 0; i < n; i++) {
        const [aNumb1 , aNumb2] = [numbInt[num1[i]], numbInt[num2[i]]]
        console.log(aNumb1*aNumb2)
    }
};

const num1 = "123",
  num2 = "456";

multiplyStrings(num1, num2);
