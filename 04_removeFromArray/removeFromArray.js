
    const removeFromArray = function(a, ...v) {

        const args= [...v];
        {
            for (let i=a.length-1; i>=0; i--)
                {
                    for (let j=0; j<v.length; j++)
                    {
                        if (a[i]===v[j])
                            {
                                a.splice(i,1);
                            }
                    }
                }
        }


        
        return a;
 };


// Do not edit below this line
module.exports = removeFromArray;
