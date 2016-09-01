
var utils = require('../seriesUtils.js');

var seriesName = function(req, res) {
    utils.getDataFromEndpoint(utils.buildUrl(req.params.tvSeriesName)).then(function(results) {
        res.render('tvSeries', {
            head: { title: 'TV series Page Title' },
            tvSeriesDetails: utils.buildSeriesDetail(results),
            time: { currdatetime: getDateTime() }
        });
    });
}

var tvSeriesDetails = function(req, res) {
     res.redirect('/tvSeries/' + req.body.seriesName);
}

var time = function() {
  return getDateTime();
}

var getDateTime = function() {

        var currdatetime = new Date();
        return currdatetime;
}

module.exports = {
    seriesName: seriesName,
      tvSeriesDetails: tvSeriesDetails,
      time: time
};
