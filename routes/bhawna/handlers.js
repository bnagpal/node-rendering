
var index = function(req, res) {
    res.render('bhawna', {
        head: { title: 'Test Page Title' },
        content: {title: 'Bhawna Page!'}
    });
}

module.exports = {
    index: index
};
