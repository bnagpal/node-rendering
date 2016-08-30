
var index = function(req, res) {
    res.render('master', {
        head: { title: 'Test Page Title' }
    });
}

module.exports = {
    index: index
};