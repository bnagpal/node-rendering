
var index = function(req, res) {
    res.render('master', {
        head: { title: 'Test Page Title' },
        time: { currdatetime: getDateTime() }
    });
}

var time = function() {
  return getDateTime();
}

var getDateTime = function() {

        var currdatetime = new Date();
        return currdatetime;
}
module.exports = {
    index: index,
    time: time
};
