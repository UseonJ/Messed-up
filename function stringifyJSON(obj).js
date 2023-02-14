function stringifyJSON(obj) {
    // your code goes here
    let result = [];
    for(i=0; i<obj.length; i++){
      if(typeof(obj[i])==='number') result.push(`${obj[i]}`)
      if(typeof(obj[i])==='boolean') {
        if (obj[i]===true) { result.push(`true`) }
        else if (obj[i]===false) { result.push(`false`) }
    }
      if(typeof(obj[i])==='string') result.push(obj[i])
       
      if(typeof(obj[i])==='object'){  
        if(Array.isArray(obj[i])) {
          const iter = `[${stringifyJSON(obj[i])}]`
          result.push([...iter])  
        // {{a:b}} 
        //   return stringifyJSON(result)
        } else {
            result.push(`${obj[i]}`)
        }   
      }
  
      
     
}  
    return result;
      
  
};

  console.log(stringifyJSON([
    9,
    null,
    true,
    false,
    "Hello world",
    [],
    [8],
    ["hi"],
    [8, "hi"],
    [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999],
    [8, [[], 3, 4]],
    [[[["foo"]]]],
    {},
    { a: "apple" },
    { foo: true, bar: false, baz: null },
    { "boolean, true": true, "boolean, false": false, null: null },
    // basic nesting
    { a: { b: "c" } },
    { a: ["b", "c"] },
    [{ a: "b" }, { c: "d" }],
    { a: [], c: {}, b: true },
  ]))