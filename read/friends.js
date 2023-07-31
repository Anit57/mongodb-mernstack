use("3pm");
// ?array read operations

// db.friends.insertMany([
//   {
//     name:"Rohan",
//     hobbies:["Singing","Books"],
//     sportData:[
//       {
//         title:"Football",
//         frequency:3
//       },
//       {
//         title:"Cricket",
//         frequency:2
//       }
//     ]
//   },
//   {
//     name:"Dipesh",
//     hobbies:["Books","Guitar","Hiking"],
//     sportData:[
//       {
//         title:"Football",
//         frequency:5
//       },
//       {
//         title:"Tennis",
//         frequency:1
//       },
//       {
//         title:"Volleyball",
//         frequency:6
//       },
//     ]
//   },
//   {
//     name:"Aakash",
//     hobbies:["Hiking","Foods","Singing"],
//     sportData:[
// {
//   title:"E-gaming",
//   frequency:3
// },
// {
//   title:"Football",
//   frequency:2
// },
// {
//   title:"Basketball",
//   frequency:7
// }
//     ]
//   }

// ])

// ?find friends whose hobbies is Singing
// db.friends.find({hobbies:"Singing"})

// ?find friends whose  hobbies is Books or Foods
// db.friends.find({$or:[{hobbies:"Books"},{hobbies:"Foods"}]})
// db.friends.find({hobbies:{$in:["Books","Foods"]}})

// ?$all
// db.friends.find({
//   hobbies:{$all:["Books","Singing"]}
// })

// db.friends.find({
//   hobbies:{$all:["Foods","Hiking"]}
// })

// ?$and
// db.friends.find({
//   $and:[{hobbies:"Foods"},{hobbies:"Hiking"}]
// })

// hobbies either Guitar or Foods
// db.friends.find({
//   $or:[{hobbies:"Guitar"},{hobbies:"Foods"}]
// })

// equivalent
// db.friends.find({
//   hobbies:{$in:["Guitar","Foods"]}
// })

db.friends.find();
