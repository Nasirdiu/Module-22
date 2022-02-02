const geting='hello my firend';
let reverses='';

function reves(text){
    for (const letter of text){
        // console.log(letter);
        reverses = letter+reverses;
    }
    return reverses;
}

const allRevwe= reves(geting);

console.log(allRevwe);

// let num = ['name','roll'];
// console.log(num.reverse());