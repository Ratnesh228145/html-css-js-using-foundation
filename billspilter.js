function splitBill(dishes, numberOfPeople) {
    // Calculate the total cost of all dishes
    const totalCost = dishes.reduce((acc, dish) => acc + dish, 0);

    // Calculate the bill per person
    const billPerPerson = totalCost / numberOfPeople;

    // Create an object to store the results
    const billDetails = {
        totalBill: totalCost,
        billPerPerson: billPerPerson
    };

    return billDetails;
}

// Example usage:
const dishes = [20, 35, 25]; // Cost of each dish
const numberOfPeople = 4;    // Number of people sharing the bill

const result = splitBill(dishes, numberOfPeople);
console.log(result);




