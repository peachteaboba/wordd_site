// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1797954803765562', // your App ID
        'clientSecret'  : '0b9e2c704a68b39df28011d5dedd993c', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'FzmwKA0e7BR0rOvrsSDvzNVIH',
        'consumerSecret'    : 'VBloMLvqABilyxyBrEtUWwOZq1TtxPxHKOFdIl6VRducFA56Ul',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    }

};