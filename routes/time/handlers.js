var time = function(req, res) {
        res.render('time', {
            head: { title: 'Time Page Title' },
            time: { currdatetime: getDateTime() }
        });
    }

var getDateTime = function() {

        var currdatetime = new Date();
        return currdatetime;
}

module.exports = {
    time: time
};
