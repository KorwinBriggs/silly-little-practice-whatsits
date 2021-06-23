/*
Eloquent Javascript, page 214, add support for arrays to the simple in-book programming
Egg, including methods for length() and element(array, n).
*/



topScope.array = (...values) => {
    return values
};
//Initially I did this by using a for/of loop to cycle through values and
//add them to a new array. I felt very stupid when I remembered that (...values)
//is ALREADY an array.
  
topScope.length = (array) => {
    return array.length;
};
  
topScope.element = (array, n) => {
    return array[n];
};