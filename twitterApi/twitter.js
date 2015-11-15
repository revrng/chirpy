'use strict';

require('dotenv').load();

let Twit = require('twit');

let T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
  	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var stream = T.stream('statuses/filter', { track: 'Paris' });
stream.on('tweet', function (tweet) {
  console.log(tweet)
})