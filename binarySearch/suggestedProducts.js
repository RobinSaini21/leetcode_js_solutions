const suggestedProducts = (products,searchWord) => {
    let l = 0,n = products.length - 1, r = n;
    let out = [];
    
    for (let i = 0; i < searchWord.length; i++) {
    const c = searchWord[i] ; 
    let res = [];
    while (l <= r && (products[l].length <= i || products[l][i] !== c)) l += 1;
    while (l <= r && (products[r].length <= i || products[r][i] !== c)) r -= 1;

    for (let j = 0; j < 3 && l + j <= r; j++) res.push(products[j + l])  
     

    out.push(res)
    }

    console.log(out)
}

const products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse";
suggestedProducts(products,searchWord)