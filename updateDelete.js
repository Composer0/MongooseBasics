const mongoose = require('mongoose');



//Connection URL
// mongoose.connect("mongodb://localhost:27017/fruitsDB", { userNewUrlParser: true });
// Overrides parser warning.

main().catch((err) => console.log(err));

async function main() {
    const url= 'mongodb://127.0.0.1:27017';
    const dbPath = '/fruitsDB';
    await mongoose.connect(url + dbPath, {
        useNewUrlParser: true})
}
//Due to current update of mongoose, the code above is what needs to be used in order to get the server to properly work in the terminal.

//Create a new schema... just like SQL.
const fruitSchema = new mongoose.Schema ({
    name: { 
        type: String, 
        required: [true, "Yo, Check the Database. You're missing a name here."]},
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
//Gotta display the data type.

const Fruit = mongoose.model("Fruit", fruitSchema);
//Creates a collection. Mongoose will naturally make the individual word plural.
const fruit = new Fruit ({ 
    name: "apple",
    rating: 7, 
    review: "Great Fruit"
});

// fruit.save();
//Saves fruit document into fruit collection.


const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 27
});

person.save();
//save will save everytime code runs which means you may see duplicates. Don't want duplicates then comment out.



// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 0,
//     review: "Don't like"
// });

// const orange = new Fruit({
//     name: "Orange",
//     score: 10,
//     review: "The Best Fruit"
// });

// const banana = new Fruit({
//     name: "Banana",
//     score: 7,
//     review: "Goes really well with Peanut Butter"
// });

// //save in bulk
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

// first half is parameter which is an array that holds all of the objects that have the same attributes. The second is the callback function that is to be performed. We check first for an error and if no error is detected we will see the success message.


// Fruit.find(function(err, fruitsDetails){
//     if(err) {
//         console.log(err);
//     } else {
//         // console.log(fruitsDetails);
//         //closes the connection. Avoiding the use of ctrl + c.
//         mongoose.connection.close();
//         //At first it doesn't look like it is closing but if you count to 8 Mississippi it will close.

//         fruitsDetails.forEach(function(fruit){
//             console.log(fruit);
//             //demonstrates how to finde specific information within an object. forEach function works perfectly for retrieving this style of data.

//         });
//     }
// });

Person.find(function(err, peopleDetails){
    if(err) {
        console.log(err);
    } else {
        // console.log(peopleDetails);
        //closes the connection. Avoiding the use of ctrl + c.
        mongoose.connection.close();
        //At first it doesn't look like it is closing but if you count to 8 Mississippi it will close.

        peopleDetails.forEach(function(person){
            console.log(person);
            //demonstrates how to finde specific information within an object. forEach function works perfectly for retrieving this style of data.

        });
    }
});

// Fruit.updateOne({_id: "6323952505f2540c68b96ffc"}, {name: "Peach"}, function(err){
//     if (err){
//         console.log(err)
//     } else {
//         console.log("Good job man, you updated it.");
//     }
// });

// condition, object, callback. Parameter, filter or what we want to update. Item to be update identified by the _id. What about it you want to update is 2nd. Finally is the callback function that logs errors.

// Fruit.deleteOne({_id: "6323952505f2540c68b96ffc"}, 
//     {name: "Peach", rating: 8, review: "Great Fruit", __v: 0}, 
//     function(err){
//         if (err) {
//             console.log(err)
//         } else {
//             console.log("Got rid of the peach did ya... shame. That guy might have made a half decent ruler.")
//         }
//     });

//Alternatively... definitely comes across as simpler, I guess the earlier is there to show that I may be bit more cautious or prefer to overkill a simple task.
// Fruit.deleteOne(
//     {name: "Peach"}, 
//     function(err){
//         if (err) {
//             console.log(err)
//         } else {
//             console.log("Got rid of the peach did ya... shame. That guy might have made a half decent ruler.")
//         }
//     });

// Person.deleteMany(
//     {age: 27}, 
//     function(err){
//         if(err) {
//             console.log(err)
//         } else {
//             console.log("Goodbye John, hardly knew ya.")
//         }
//     }
// );