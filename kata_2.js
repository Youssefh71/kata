/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];

function sumOfEvenNumbers(numbers){
    const array = [5, 8, 10, 12, 20,35];

     for(i = 0; i < array.length; i++){
        let sum = 0;
        if (array[i] %2 === 0) {
            sum += array[i];
        }
       
     }

    return sum;
}




/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];
let max = 0;


function maxNumber(numbers) {
     
    for(i = 0; i < numbers2.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

// your code here