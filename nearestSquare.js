// Nearest square from `num`

function nearestSquare(num) {
    // Using Math.pow() instead of exponentiation (**) operator for compatibility
    return Math.pow(Math.round(Math.sqrt(num)), 2);
}

console.log(nearestSquare(8)); // 9           The nearest square from 8 is 9
