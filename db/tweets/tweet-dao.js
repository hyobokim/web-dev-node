const model = require('./tweet-model');

const findAllTweets = () => model.find();


const createTweet = (tweet) =>
  // const newTweet = {
  //   "_id": (new Date()).getTime() + '',
  //   "topic": "Web Development",
  //   "userName": "ReactJS",
  //   "verified": false,
  //   "handle": "ReactJS",
  //   "title": "",
  //   "time": "2h",
  //   "avatar-image": "../../../images/react-blue.png",
  //   "logo-image": "../../../images/react-blue.png",
  //   "stats": {
  //     "comments": 123,
  //     "retweets": 234,
  //     "likes": 345
  //   },
  //   ...tweet.body
  // };
  // newTweet['_id'] = (new Date()).getTime();
  model.create(
      {
        "_id": (new Date()).getTime(),
        "topic": "Web Development",
        "userName": "ReactJS",
        "verified": false,
        "handle": "ReactJS",
        "title": "",
        "time": "2h",
        "avatar-image": "../../../images/react-blue.png",
        "logo-image": "../../../images/react-blue.png",
        "stats": {
          "comments": 123,
          "retweets": 234,
          "likes": 345
        },
        ...tweet
      }
  );
const deleteTweet = (id) => model.deleteOne({_id: id});
const updateTweet = (id, tweet) => model.updateOne({_id: id},
    {$set: {"liked": true}});

module.exports = {
  findAllTweets, createTweet,
  deleteTweet, updateTweet
};
