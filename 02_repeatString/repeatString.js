const repeatString = function(str, n) {
    
    let s="";
    if (n<0)
    {
        return "ERROR";
    }



    for (let i=0; i<n; i++)
    {
        s+=str;
    }
    return s;

};

// Do not edit below this line
module.exports = repeatString;
