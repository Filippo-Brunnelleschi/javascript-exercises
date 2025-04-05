const reverseString = function(str) {
    let t="";
    let i=0;
    let s= str.split("");
    let f=s.length;
    while (i<f)
    {
        t=s[i];
        s[i]=s[f];
        s[f]=t;
        i++;
        f--;
    }
    str= s.join("");
    return str;
};

// Do not edit below this line
module.exports = reverseString;
