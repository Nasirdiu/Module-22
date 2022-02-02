const name=['abul','babul','kabul','abul','babul','kabul','abul','babul','kabul','abul','babul','kabul']

function duplicatName(name){
    const unique =[];
    /* for (let i=0; i<name.length;i++){
        const element=name[i];
        console.log(element); */
    
    for(const element of name){
        // console.log(element);
        if(unique.indexOf(element) ==-1){
            unique.push(element);
        }
    }
    return unique;
}

const allName=duplicatName(name);
console.log(allName);
 