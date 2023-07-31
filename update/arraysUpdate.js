use("3pm");

//? update array

// db.scores.find({name:"Dipesh"})

//change social to DataScience of Anit

// db.scores.updateOne({
//     name:"Anit",
//     "scores.subject": "Social"
// },{
//     $set:{
//         "scores.$.subject":"DataScience"
//     }
// })

//increase sandip's social score by 15

// db.scores.updateOne({
//     name:"Sandip",
//     "scores.subject": "Social"
// },{
//     $inc:{
//         "scores.$.obtained":15
//     }
// })

// db.scores.updateOne({
//     name:"Sandip"
// },{
//     $set:{
//         "scores.$[].obtained":79
//     }
// })

//? decrease every score obtained by sandip by 5
// db.scores.updateOne(
//   {
//     name: "Sandip",
//   },
//   {
//     $inc: {
//       "scores.$[].obtained": -5,
//     },
//   }
// );

// db.scores.updateOne({name:"Dipesh"},{
//     $set:{
//         "scores.$[item].obtained":70
//     }
// },{
//     arrayFilters:[{"item.obtained":{$gt:80}}]
// })

// db.students.insertMany([
//   { name: "Bishal", grades: [85, 80, 80] },
//   { name: "Milan", grades: [88, 90, 92] },
//   { name: "Ayush", grades: [85, 100, 90] },
// ]);

db.students.find();

// db.students.updateOne({
//     name:"Bishal",
//     grades: 85
// },{
//     $set:{
//         "grades.$": 95
//     }
// })

// db.students.updateOne({
//     name:"Milan",
// },{
//     $inc:{
//         "grades.$[]": -8
//     }
// })

// db.students.updateOne({
//     name:"Ayush"},{
//         $set:{
//             "grades.$[item]":70
//         }
//     },
//     {
//         arrayFilters:[{"item":{$gt:80}}],
//     })
