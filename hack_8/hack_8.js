/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];


let selectedItems = arr.slice(1, 4); 

let firstTwo = selectedItems.slice(0, 2).map(item => item.replace("a", "@"));


let lastOne = selectedItems[2].toUpperCase(); // "QUX"


result = [...firstTwo, lastOne];



module.exports = result;