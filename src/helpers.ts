const ucwords = (str:string)=>{
    return str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
}

export {
    ucwords
}