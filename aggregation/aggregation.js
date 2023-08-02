use("3pm");

// ?AGGREGATION

// db.persons.aggregate([{
//     $match:{gender:"female"}
// },
// {
//     $project: {
//       gender:1,
//       email:1,
//       fullName:{$concat:["$name.first"," ","$name.last"]},
//       dob:1
//     }
// },
// {
//     $sort:{
//         email:-1
//     }
// },
// {
//     $skip: 500
// },
// {
//     $limit: 2
// }])

// db.persons.find()

db.persons.aggregate([
  {
    $match: { $and: [{ gender: "male" }, { "dob.age": { $gt: 30 } }] },
  },
  {
    $project: {
      fullName: { $concat: ["$name.first", " ", "$name.last"] },
      email: 1,
      gender: 1,
      age: "$dob.age",
      state: "$location.state",
      phone: 1,
    },
  },
  {
    $sort: {
      age: 1,
    },
  },
]);
