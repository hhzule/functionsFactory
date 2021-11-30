// object to remove null, and undefined from
const foo = {
    a : 'foo',
    b : 'bar',
    c : null,
    d : undefined,
    e : 0,
    f : [{
      a : 'fuz',
      b : null,
      c : {
        a : 'biz',
        b : 'buz',
        c : [
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0,
            f : false
          },
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0
          },
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0
          }
        ]
      }
    }]
  };

//   function that takes the object, clones into new object and removes null and undefined
// courtesy: Stack Overflow ==> https://stackoverflow.com/questions/52367849/remove-empty-null-values-from-nested-object-es6-clean-nested-objects
 
const cleanseA = obj =>{
    // cloning into new object, using deep cloning method
    let object = JSON.parse(JSON.stringify(obj))

    // function to delete null and undefined from stack overflow
 const remove = (object)=>{
    Object
    .entries(object)
    .forEach(([k, v]) => {
        if (v && typeof v === 'object')
        remove(v);
    
        if (v && 
            typeof v === 'object' && 
            !Object.keys(v).length || 
            v === null || 
            v === undefined ||
            v.length === 0
        ) {
            if (Array.isArray(object))
                object.splice(k, 1);
                delete object[k];
        }
    });
    // Stringified the object in order to see nested array values, can return without stringifying
 return JSON.stringify(object);
// return object;
 }

 return remove(object)
}

// object before cleanseA function
// console.log("foo before", foo)
// cleanseA returns new object without mutating original object
console.log(cleanseA(foo))
// object after cleanseA function
// console.log("foo after", foo)