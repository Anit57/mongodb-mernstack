use("sample_mflix");

// db.shows.find({
//     "rating.average":{$gt:7}},{name:1,rating:1}
// ).sort({"rating.average":-1})

db.shows
  .find({ runtime: { $lt: 100 } }, { name: 1, runtime: 1, status: 1 })
  .sort({ name: -1 });
