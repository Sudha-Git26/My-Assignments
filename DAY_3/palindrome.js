function revStr(){
    let input="MADAM"
    let reverse=""
    for(let i=input.length-1; i>=0; i--){
        reverse +=input[i];

    }
    if(reverse === input) {
        console.log("String is palindrome", reverse)
    } else { console.log("String is not palindrome")

    }

}
revStr();
