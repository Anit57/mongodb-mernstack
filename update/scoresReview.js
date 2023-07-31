use("3pm");

// db.scores.insertOne({
//     "name": "Santosh",
//     "location": {
//       "temporary": "Bhaktpaur",
//       "permanent": "Lalitpur"
//     },
//     "scores": [
//       {
//         "subject": "Science",
//         "obtained": 72
//       },
//       {
//         "subject": "Social",
//         "obtained": 65
//       },
//       {
//         "subject": "Math",
//         "obtained": 81
//       }
//     ],
//     "lowestScore": 41.5,
//     "age": 24
// })

db.scores.find();

// ?1.update lowestScore of Dipesh to 51,
// ?temporary location to "Biratnagar"
// ?Change name of Santosh to Sandip
// ?2.increase age of Dipesh by 2
// ?3.decrease lowestScore of Dipesh by 9
// ?4. divide age of Anit by 2
// ?5.multiply age of Sanjeev by 1.5

// db.scores.updateOne({name:"Dipesh"},{
//     $set:{
//         lowestScore: 51,
//         "location.temporary": "Biratnagar"
//     }
// })

// db.scores.updateOne({name:"Santosh"},{
//     $set:{
//         name: "Sandip"
//     }
// })

// db.scores.updateOne({name: "Dipesh"},{
//     $inc:{
//         totalAge: 2,
//         lowestScore: -9
//     }
// })

// db.scores.updateOne({name: "Anit"},{
//     $mul:{
//         totalAge: 1/2
//     }
// })

// db.scores.updateOne({name: "Sanjeev"},{
//     $mul:{
//        age: 1.5
//     }
// })
