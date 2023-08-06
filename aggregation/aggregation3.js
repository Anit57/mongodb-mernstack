use("3pm");

// db.owner.insertOne({
//     name:"Rabina Gurung",
//     age: 25,
//     location: "Surry Hills, Sydney",
//     gender: "female"
// })

// db.owner.find()

// db.car.insertOne({
//   model: "e6",
//   brand: "BYD",
//   year: 2021,
//   type: "electric",
//   ownerId: ObjectId("64cf6bd7cf7b65a7fd37244f"),
// });

// db.car.insertOne({
//   model: "Y",
//   brand: "Tesla",
//   year: 2018,
//   type: "electric",
//   ownerId: ObjectId("64cf6bd7cf7b65a7fd37244f"),
// });

// db.car.find()

//? lookup ko data array mah aucha

// db.car.aggregate([{
//     $match:{}
// },{
//     $lookup:{
//         from:"owner",
//         localField:"ownerId",
//         foreignField:"_id",
//         as:"ownerData"

//     }
// },{
//     $project: {
//       model:1,
//       brand:1,
//       ownerName:{$first:"$ownerData.name"}
//     }
// }])

db.owner.aggregate([
  {
    $match: {},
  },
  {
    $lookup: {
      from: "car",
      localField: "_id",
      foreignField: "ownerId",
      as: "carData",
    },
  },
  {
    $project: {
      name: 1,
      "carData.brand": 1,
      "carData.type": 1,
      numberOfCars: { $size: "$carData" },
    },
  },
]);
