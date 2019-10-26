const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {type: String},
  password: {
    type: String,
    select: false,
    set(val) {
      return require('bcrypt').hashSync(val, 10);
      //  $2b$10$JEJhVd6brAQ0QzGgAh1SHOCRm3p7SVng0Wqxxaz8YAZ9eBaNEcyI2
    //  $2b$10$mnvhrIhNcQBpxAx2LvHWf.ePYwcHkr.WhC4xVBDvxizPVB6F.fxeG
    }
  },
});

module.exports = mongoose.model('AdminUser', schema);

