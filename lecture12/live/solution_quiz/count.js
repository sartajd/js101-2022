function countBs(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'B' || str[i] === 'b'){
            count++;
        }
    }
    return count;
}