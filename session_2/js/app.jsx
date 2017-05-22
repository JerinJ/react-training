var Header = require('./navigation/header.jsx');
var Footer = require('./navigation/footer.jsx');
var Content = require('./content/content.jsx');
var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <App training="React"/>,
    document.getElementById('continer')
);