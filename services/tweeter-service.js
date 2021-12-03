// let tweets = require('../data/tweets.json');
const dao = require('../db/tweets/tweet-dao');

module.exports = (app) => {

  const findAllTweets = (req, res) =>
    dao.findAllTweets()
    .then((tweets) => res.json(tweets)) ;

  const createTweet = (req, res) =>
    dao.createTweet(req.body).then((createdTweet) => res.json(createdTweet));


  const deleteTweet = (req, res) => dao.deleteTweet(req.params.id).then((status) => res.send(status))
  // const likeTweet = (req, res) => { … }


  app.get('/api/tweets', findAllTweets);

  // const createTweet = (req, res) => {
  //   const newTweet = {
  //     _id: (new Date()).getTime() + '',
  //     "topic": "Web Development",
  //     "userName": "ReactJS",
  //     "verified": false,
  //     "handle": "ReactJS",
  //     "time": "2h",
  //     "avatar-image": "../../../images/react-blue.png",
  //     "logo-image": "../../../images/react-blue.png",
  //     "stats": {
  //       "comments": 123,
  //       "retweets": 234,
  //       "likes": 345
  //     },
  //     ...req.body,
  //   }
  //   newTweet['_id'] = (new Date()).getTime();
  //   tweets = [
  //     newTweet,
  //     ...tweets
  //   ];
  //   res.json(newTweet);
  // }

  app.post('/api/tweets', createTweet); // listen for HTTP POST and notify handler


  // const deleteTweet = (req, res) => {
  //   const id = req.params['id'];
  //   tweets = tweets.filter(tweet => tweet._id !== id);
  //   res.sendStatus(200);
  // }
  app.delete('/api/tweets/:id', deleteTweet);




  // const likeTweet = (req, res) => {
  //   const id = req.params['id'];
  //   tweets = tweets.map(tweet => {
  //     if (tweet._id === id) {
  //       if (tweet.liked === true) {
  //         tweet.liked = false;
  //         tweet.stats.likes--;
  //       } else {
  //         tweet.liked = true;
  //         tweet.stats.likes++;
  //       }
  //       return tweet;
  //     } else {
  //       return tweet;
  //     }
  //   });
  //   res.sendStatus(200);
  // }

  const likeTweet = (req, res) =>
    dao.updateTweet(req.params.id, req.body)
    .then(status => res.send(status));


  app.put('/api/tweets/:id/like', likeTweet);

};
