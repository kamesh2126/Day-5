class UberPricing {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distance, time) {
        const distanceCost = distance * this.costPerMile;
        const timeCost = time * this.costPerMinute;
        const totalPrice = this.baseFare + distanceCost + timeCost;
        return totalPrice;
    }
}

const uberX = new UberPricing(45,60,90); 

const distanceTraveled = 20; 
const timeTraveled = 35; 

const price = uberX.calculatePrice(distanceTraveled, timeTraveled);
console.log(`The total price for the ride is ₹${price.toFixed(2)}`);