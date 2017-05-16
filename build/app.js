var App = React.createClass({
    displayName: "App",

    render: function () {
        return React.createElement(
            "div",
            { className: "myClass", "data-max": "23" },
            "Jerin"
        );
    }
});

var MyName = React.createClass({
    displayName: "MyName",

    render: function () {
        return React.createElement(
            "div",
            { className: "myId", "data-min": "20" },
            "sdsdsd"
        );
    }
});

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(App, null),
    React.createElement("My-name", null)
), document.getElementById('continer'));