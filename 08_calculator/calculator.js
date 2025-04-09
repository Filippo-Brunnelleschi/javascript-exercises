const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let s=0;
  for (let  i=0; i<a.length; i++)
  {
    s+=a[i];
  }
  return s;
};

const multiply = function(a) {
  let s=1;
  for (let  i=0; i<a.length; i++)
  {
    s*=a[i];
  }
  return s;

};

const power = function(b,e) {
  return b**e;
	
};

const factorial = function(a) {
  let s=1;
  for (let i=a; i>0; i--)
  {
    s*=i;
  }
  return s;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
