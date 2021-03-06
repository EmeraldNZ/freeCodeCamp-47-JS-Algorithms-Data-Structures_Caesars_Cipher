
/**************   Solution #1    ********************************************************************************************/

function rot13(str){
    let rotCharArray = [];
    let regex = /[A-Z]/;
    let strArray = str.split('');
    for(let x in strArray){
        if(regex.test(strArray[x])){
            rotCharArray.push((strArray[x].charCodeAt() - 65 + 13) % 26 + 65);
        }else{
            rotCharArray.push(strArray[x].charCodeAt());
        }
    }
    // The apply() method accepts arguments in an array and the first argument (null) does not matter, it could be " ", 0, etc.
    return String.fromCharCode.apply(null, rotCharArray);
}
rot13("SERR PBQR PNZC"); // decode to FREE CODE CAMP
rot13("SERR CVMMN!"); // FREE PIZZA!




/**************   Solution #2    ********************************************************************************************/

function rot(str) {
   return str.replace(/[A-Z]/g, char => String.fromCharCode(char.charCodeAt(0) % 26 + 65));
}
// [A]  65 % 26 ⇔ 13 + 65 =  78 [N]
// [B]  66 % 26 ⇔ 14 + 65 =  79 [O]
// ......





// Retrieved from
//https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher/
