const mapObject = (object, sep, template) => {
    let newObject = new template();

    for(let [key, value] of Object.entries(object)) {
        try{
            let props = key.split(sep).join('.');
            let statement = "";

            if(typeof value == 'number') {
                statement = `newObject.${props} = ${value}`;
            } else if(typeof value == 'string') {
                statement = `newObject.${props} = \'${value}\'`;
            }

            eval(statement);
        } catch(error) {
            console.error(error);
        }
        
    }
    return newObject;
}

/**
 * Maps an object of type key value where the key values ​​of the object indicate the properties of a template object.
 * By example: The row object 
 * `{ "user_name": "root", "user_pass": 123, "id": 0 }` 
 * is the same as template 
 * `{ id: 0, user: { name: "root", pass: 123 } }`.
 * 
 * @details This function is useful for creating a complex set of objects from simple objects coming from a SQL query.
 * OBS: The computational complexity of this function is `O(n²)` (quadratic), do not use this function to map arrays that have an extremely large length 
 * @param { {[key:string]: any}[] } rows - An array of key value objects.
 * @param { string } sep - Character that separates the properties of a key.
 * @param { Object } template - Template object.
 * @returns An array of objects mapped to the template.
 */
module.exports.mapToTemplate = function(rows, sep, template) {
    let res = [];
    for(let row of rows) {
        res.push(mapObject(row, sep, template));
    }
    return res;
}