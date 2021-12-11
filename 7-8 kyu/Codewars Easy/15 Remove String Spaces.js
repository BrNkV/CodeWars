/** COMPLETE
 * Simple, remove the spaces from the string, then return the resultant string.
 * 
 * Просто удалите пробелы из строки, а затем верните результирующую строку.
 * 
 */

 function noSpace(x){
    return x = x.replace(/\s+/g, '');
}


function noSpace(x){return x.split(' ').join('')}