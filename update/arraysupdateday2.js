use("3pm");

// db.students.find()

// db.students.updateOne({name:"Bishal"},{
//     $push:{
//         grades: 95
//     }
// })

//? add 91 to milan's grades

// db.students.updateOne(
//  { name: "Milan" },
//   {
//     $push: {
//       grades: 91,
//     },
//   }
// );

db.students.find();

//? adding multiple values to array

//!this adds whole array at the last index of grades
// db.students.updateOne({
//     name: "Milan"
// },{
//     $push:{
//         grades:{71,81}
//     }
// })

// db.students.updateOne({
//     name: "Milan"
// },{
//     $push:{
//         grades:{$each:[71,81]}
//     }
// })

// db.students.updateOne({
//     name: "Ayush"
// },{
//     $push:{
//         grades:{$each:[55,61,92,85,70]}
//     }
// })

// TODO:addToset

// ?remove items from array
//?-1 to remove item from first index
//?1 to remove item from last index

// db.students.updateOne({name:"Bishal"},{
//     $pop:{
//         grades: -1
//     }
// })

//?remove last item form grades of ayush
// db.students.updateOne({name:"Milan"},{
//     $pop:{
//         grades: 1
//     }
// })

// ?$pull => removes items from array
// ?based upon "condition"

// db.students.updateOne({
//     name: "Ayush"
// },{
//     $pull:{
//         grades:{$gt:65}
//     }
// })

// db.students.updateOne({
//     name:"Milan"
// },{
//     $pull:{
//         grades:{$lte:85}
//     }
// })

//? addToSet

// db.students.updateOne({
//     name:"Ayush"
// },{
//     $addToSet:{
//         grades:{
//             $each:[55,61,75,95,80]
//         }
//     }
// })

// db.students.updateOne({
//     name:"Bishal"
// },{
//     $addToSet:{
//         grades:{
//             $each:[80,95,55]
//     }
// }
// })

// db.students.updateOne({
//     name:"Bishal"
// },{
//     $push:{
//         grades:{
//             $each:[100,120],
//             $position: 0
//     }
// }
// })

//? add 85,75,65,35 to grades of Milan

// db.students.updateOne({
//     name:"Milan"
// },{
//     $push:{
//         grades:{
//             $each:[85,75,65,35]
//         }
//     }
// })

//? pullAll

// db.students.updateOne({
//     name:"Milan"
// },{
//     $pullAll:{
//         grades:[85,65]
//     }
// })
