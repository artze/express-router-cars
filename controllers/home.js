function index(req, res) {
	res.send('Home page');
}

function about(req, res) {
	res.send('About page');
}

module.exports = {
	index: index,
	about: about
}