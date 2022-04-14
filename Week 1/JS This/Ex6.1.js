const coffeeShop = {
    beansStock: 40,

    Money: 0,

    beansPrice: 0.2,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType){
        if(!(drinkType in this.drinkRequirements)){
            alert("Sorry, we don't make " + drinkType)
            return false
        }
        if(this.drinkRequirements[drinkType] > this.beansStock){
            this.buyBeans(this.drinkRequirements[drinkType] - this.beansStock)
        }
        this.beansStock = this.beansStock - this.drinkRequirements[drinkType]
    },

    buyBeans: function(beansQn){
        this.beansStock += beansQn;
        this.Money -= beansQn * this.beansPrice;
        alert("We bought beans: " + beansQn)
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"