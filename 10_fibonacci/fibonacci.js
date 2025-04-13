const fibonacci = function(n) {


    if (n>=0)
    {
    let map = new Map();

    if (n==0){return 0;}

  if (n==1 || n==2)
    {
        return 1;
    }

    if (n in map)
    {
        return map.n;
    }
    map.n=fibonacci(n-1)+ fibonacci(n-2);
    return map.n;
    }
    else {return "OOPS";}
};

// Do not edit below this line
module.exports = fibonacci;
