const coffeeShop = {

    beansStock: 0,

    Money: 0,

    drinkRequirements: {
        latte: { beanRequired: 10, price: 5 },
        americano: { beanRequired: 5, price: 3 },
        doubleShot: { beanRequired: 15, price: 7 },
        frenchPress: { beanRequired: 12, price: 6 }
    },

    buyDrink: function (drinktype) {
        if (!(drinktype in this.drinkRequirements)) {
            alert("Sorry, we don't make " + drinktype)
        } else {
            this.makeDrink(drinktype)
            this.Money += this.drinkRequirements[drinktype].price
        }
    },

    makeDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType].beanRequired > this.beansStock) {
            this.buyBeans(this.drinkRequirements[drinkType].beanRequired - this.beansStock)
        }
        this.beansStock = this.beansStock - this.drinkRequirements[drinkType].beanRequired
    },

    buyBeans: function (beansQn) {
        const PRICE_OF_BEANS: 0.2,
        this.beansStock += beansQn;
        this.Money -= beansQn * PRICE_OF_BEANS;
        alert("We bought beans: " + beansQn)
    }
}

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"