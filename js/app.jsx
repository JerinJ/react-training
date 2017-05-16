var App = React.createClass({
    render: function() {
        return (<div className="myClass" data-max="23">Jerin</div>);
    }
});


var MyName = React.createClass({
    render: function() {
        return (<div className="myId" data-min="20">sdsdsd</div>);
    }
});

ReactDOM.render(
    <div>
        <App />
        <My-name />
    </div>,
    document.getElementById('continer')
);