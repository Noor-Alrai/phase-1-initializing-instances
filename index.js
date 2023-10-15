// Write your code here
class Breakfast{
    constructor(food, drink){
        this.food=food;
        this.drink=drink;
    }
}

let myBreakfast = new Breakfast("egg", "orange juice")
class Lunch{
    constructor(salad, soup, drink){
        this.salad=salad;
        this.soup=soup;
        this.drink =drink;
    }
}
 new Lunch("normal" , "vigitabels", "blueberry")
class Dinner{
    #dessert;
    constructor(salad, soup, entree,dessert){
        this.salad =salad;
        this.soup =soup;
        this.entree =entree;
        this.#dessert=dessert;
    }
}
new Dinner("yonan salad" , "corn" , "entree")