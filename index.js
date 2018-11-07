const bacon_cipher = {
    A: "aaaaa",
    B: "aaaab",
    C: "aaaba",
    D: "aaabb",
    E: "aabaa",
    F: "aabab",
    G: "aabba",
    H: "aabbb",
    I: "abaaa",
    J: "abaaa",
    K: "abaab",
    L: "ababa",
    M: "ababb",
    N: "abbaa",
    O: "abbab",
    P: "abbba",
    Q: "abbbb",
    R: "baaaa",
    S: "baaab",
    T: "baaba",
    U: "baabb",
    V: "baabb",
    W: "babaa",
    X: "babab",
    Y: "babba",
    Z: "babbb"
}

// console.log(bacon_cipher['A']);
const encode = () =>{
    let result = "";
    let addString = "";
    for (let i = 2; i < process.argv.length; i++){
        addString += process.argv[i] + " ";
    }
    if (process.argv[2] === undefined){
        console.log("Nothing to encode!");
        return 0;
    }
    else {
        inputArray = addString.toUpperCase().split("");
        console.log(inputArray);
        for (let i = 0; i < inputArray.length; i++){
            if (inputArray[i] === " "){
                result += " ";
            }
            else{
                result += bacon_cipher[inputArray[i]] + " ";
            }
        }
    }
    return result;
}
console.log(encode());