var Product = require("../models/product");

var mongoose = require("mongoose");

//mongoose.connect("localhost:27017/security");
mongoose.connect("mongodb://127.0.0.1:27017/security");

var products = [
    new Product({
        imagePath:"https://vignette.wikia.nocookie.net/es.gta/images/d/de/Grand_Theft_Auto_IV.JPG/revision/latest?cb=20080911024224",
        title: "Grand Theft Auto IV",
        description: "Most games in the series are set in fictional locales modelled on cities \
         usually either Liberty City, Vice City or San Andreas, which are stand-ins for New York City, \
         Miami and the state of California, respectively. The first game encompassed three fictional cities,\
          while subsequent titles tend to emphasise a single setting. Gameplay focuses on an open world where the\
           player can choose missions to progress an overall story",
        price: 50
    }),
    new Product({
        imagePath: "https://images.g2a.com/images/1024x768/1x1x0/5d4e0a720501/590db353ae653a7e1369e7b9",
        title: "Counter Strike Global",
        description: "That original game was followed by Counter-Strike: Condition Zero,\
         developed by Turtle Rock Studios and released in 2004. In November of that year,\
          Counter-Strike: Source was released by Valve. Released only eight months after Condition Zero,\
           Source was a remake of the original Counter-Strike and the first in the series to run on Valve's newly created Source engine",
        price: 30
    }),
    new Product({
        imagePath: "https://cf.geekdo-images.com/zxG1GNiu7zlzvPJ8XocGGCKFyYM=/fit-in/1200x630/pic347555.jpg",
        title: "Mall of Horror",
        description: "A first-person arcade adventure, it draws inspiration from the George A.\
         Romero film Dawn of the Dead; the player controlling four protagonists exploring a zombie-filled shopping mall.\
          It draws from many parts of the film, including the gunshops, the escalators,\
           and the articulated trucks used to block the entrances.",
        price: 25
    }),
    new Product({
        imagePath:"http://pocketmedia.ign.com/pocket/image/object/837/837021/needforspeedcarbon_gcnbox.jpg",
        title: "Need For Speed Carbon",
        description: "Need for Speed: Carbon gameplay is similar to Need for Speed: Most Wanted and Underground 2,\
         but based upon rival street racing crews instead of individuals. Players run a crew and can hire specific\
          street racers to be in their crew and the active friendly racer is known as a wingman. ",
        price: 40
    }),
    new Product({
        imagePath:"http://huntinggamesforsale.com/images/delta-force-2-games-for-sale.jpg",
        title: "Delta Force",
        description: "The player assumes the role of a Delta Force operative who takes part in military operations\
         in various theatres. Objectives typically involve the elimination of a hostile presence in a region,\
          assassinating a high-profile target, destroying military equipment or escorting POWs or civilians to\
           an extraction point. Depending on the mission the player also needs to make it to an extraction point\
            himself after fulfilling all other objectives.",
        price: 60
    }),
];

var seedPromis = new Promise(function(resolve, reject){
    for(var i = 0; i < products.length; i++){
        products[i].save();
    }
});

seedPromis.then(function(){
    mongoose.disconnect();
});

