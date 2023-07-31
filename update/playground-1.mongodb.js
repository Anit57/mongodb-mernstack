use("3pm")

//update
// ?set
// db.persons.find()

//find user with firstName "victor" and
//set his email to "victor@gmail.com"
// db.persons.updateOne({"name.first":"victor"},{
//     $set:{
//         email:"victor@gmail.com"
//     }
// })

// ?find user whose first name is carl and state is "wicklow"
// ?update his email to "carl@gmail.com"
// ?and phone to 9845123652

// db.persons.updateOne({"name.first":"carl","location.state":"wicklow"},{
//     $set:{
//         email:"carl@gmail.com",
//         phone:"9845123652"
//     }
// })

// db.scores.insertMany([
//   {
//     name: "Sanjeev",
//     age: 23,

//     highestScore: 93,
//     location: {
//       temporary: "Ktm",
//       permanent: "Kavre",
//     },
//     scores: [
//       {
//         subject: "Science",
//         obtained: 85,
//       },
//       {
//         subject: "Social",
//         obtained: 75,
//       },
//       {
//         subject: "Math",
//         obtained: 93,
//       },
//     ],
//   },
//   {
//     name: "Anit",
//     age: 24,

//     highestScore: 95,
//     location: {
//       temporary: "Ktm",
//       permanent: "Nepalgunj",
//     },
//     scores: [
//       {
//         subject: "Science",
//         obtained: 95,
//       },
//       {
//         subject: "Social",
//         obtained: 82,
//       },
//       {
//         subject: "Math",
//         obtained: 73,
//       },
//     ],
//   },
//   {
//     name: "Dipesh",
//     age: 23,

//     highestScore: 98,
//     location: {
//       temporary: "Ktm",
//       permanent: "Bhaktapur",
//     },
//     scores: [
//       {
//         subject: "Science",
//         obtained: 81,
//       },
//       {
//         subject: "Social",
//         obtained: 67,
//       },
//       {
//         subject: "Math",
//         obtained: 98,
//       },
//     ],
//   },
// ]);


// db.scores.find();
// db.scores.updateOne({"name": "Sanjeev"},{
//     $set:{
//         age : 24,
//         "location.temporary":"Lalitpur"
//     }
// })

// db.scores.updateOne({name:"Anit"},{
//     $inc:{
//         age :2
//     }
// })

// db.scores.updateMany({},{
//     $inc:{
//         age :2
//     }
// })

// db.scores.updateOne({name:"Anit"},{
//     $inc:{
//         highestScore: 3
//     }
// })

// db.scores.updateMany(
//    },
//   {
//     $inc: {
//       highestScore: 3,
//     },
//   }
// );