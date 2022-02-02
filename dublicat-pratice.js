let number = [20,10,30,100,200,20,10,100];

function duplication(letter){
    let unique =[];

    for(const element of letter){
        if (unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const total=duplication(number);
console.log('dubol name ai khane asbe na unique name hba sudu',total);