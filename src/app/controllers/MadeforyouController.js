const Song = require('../models/Makeforyou');

const MadeforyouController= {
    getAllSongs: function (req, res) {
      Song.getAllSongs((err, result) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        // res.render('topchart',{result})
        res.json(result)
      });
    },
}
module.exports =  MadeforyouController;


   