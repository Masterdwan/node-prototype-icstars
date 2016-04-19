function User (){
    this.name = "";
    this.life = 50;
    this.givelife = function givelife(targetplayers){
        targetplayers.life += 1;
        console.log(this.name + "gave 1 life to" + targetplayers.name);
    }
}

var Gant = new User();
var John = new User();
Gant.name = "Gant";
John.name = "John";

Gant.givelife(John);
console.log(" Gant: " + Gant.life);
console.log("john: " + John.life);

//You can add functions to all objects
User.prototype.uppercut = function uppercut(targetplayers){
    targetplayers.life -= 3;
    console.log(this.name + " just uppercutted " + targetplayers.name);
};

John.uppercut(Gant);
console.log("Gant: " + Gant.life);
console.log("john: " + John.life);


//You can add properties to all objects
User.prototype.magic = 95;
console.log(Gant.magic);
console.log(John.magic);