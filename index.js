// Code your solution in this file!
const distanceFromHqInBlocks = num => Math.abs(num - 42)

const distanceFromHqInFeet = num => distanceFromHqInBlocks(num) * 264

const distanceTravelledInFeet = (num1, num2) => Math.abs(num1 - num2) * 264

const calculatesFarePrice = (start, dist) => {
    const fare = distanceTravelledInFeet(start, dist)
    if (fare <= 400) return 0;
    else if (fare <= 2000) return (fare - 400) * 0.02
    else if (fare <= 2500) return 25
    else if (fare > 2500) return "cannot travel that far"
}

// Executions
console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))
console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))
console.log(distanceTravelledInFeet(43, 48))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))
console.log("----------------------------")
console.log(calculatesFarePrice(43, 44))
console.log(calculatesFarePrice(34, 32))
console.log(calculatesFarePrice(50, 58))
console.log(calculatesFarePrice(34, 24))


