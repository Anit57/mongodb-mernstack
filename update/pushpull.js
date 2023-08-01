use("3pm");

//?remove subjects whose obtained is
//?less than 68 in Dipesh

db.scores.find();

// db.scores.updateOne({
//     name:"Dipesh"
// },{
//     $pull:{
//         scores:{obtained:{$lt:68}
//     }
//     }
// })

//?remove Data Science subject from Anit's Scores

// db.scores.updateOne({
//     name:"Anit"
// },{
//     $pull:{
//         scores:{subject:"DataScience"}
//     }
// })

// db.scores.updateOne({
//     name:"Anit"
// },{
//     $pullAll:{
//         scores:[
//             {
//                 subject:"Math",
//                 obtained:73
//             }
//         ]
//     }
// })

//?push
//? add following scores on Anit
//?subject: "Computer", obtained: 95
//?subject:"DataMining", obtained: 82

// db.scores.updateOne({
//     name:"Anit"
// },{
//     $push:{
//         scores:{
//             $each:[
//                 {
//                     subject:"Computer",
//                     obtained:95
//                 },
//                 {
//                     subject:"DataMining",
//                     obtained:82
//                 }
//             ]
//         }
//     }
// })
