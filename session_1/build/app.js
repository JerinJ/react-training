var App = React.createClass({
    displayName: 'App',

    render: function () {
        var trainingData = {
            name: 'React JS',
            tech: 'FET',
            company: 'Cybage'
        };
        return React.createElement(
            'div',
            null,
            React.createElement(Header, { training: trainingData.name }),
            React.createElement(Content, { tech: trainingData.tech }),
            React.createElement(Footer, { company: trainingData.company })
        );
    }
});
var Header = React.createClass({
    displayName: 'Header',

    getInitialState: function () {
        return {
            status: 'biginner'
        };
    },
    render: function () {
        return React.createElement(
            'header',
            null,
            React.createElement(
                'h1',
                null,
                this.props.training,
                ' tutorial'
            ),
            React.createElement(
                'h3',
                null,
                this.state.status
            )
        );
    }
});
var Content = React.createClass({
    displayName: 'Content',

    getDefaultProps: function () {
        return {
            trainner: 'Pratik'
        };
    },
    getInitialState: function () {
        return {
            duration: 1.5
        };
    },
    componentWillMount: function () {
        console.log('componentWillMount');
    },
    componentDidMount: function () {
        console.log('componentDidMount');
    },
    propTypes: {
        tech: React.PropTypes.string.isRequired
    },
    _onInputChnage: function (e) {
        console.log(e.target.value);
        this.setState({
            duration: e.target.value
        });
    },
    render: function () {
        console.log('render');
        return React.createElement(
            'section',
            null,
            React.createElement(
                'div',
                null,
                'Technology used: ',
                this.props.tech
            ),
            React.createElement(
                'div',
                null,
                'Trainner: ',
                this.props.trainner
            ),
            React.createElement(
                'div',
                null,
                'Duration: ',
                this.state.duration,
                ' Hr'
            ),
            React.createElement(
                'div',
                null,
                'Give duration: ',
                React.createElement('input', { name: 'name', type: 'text', value: this.state.duration, onChange: this._onInputChnage })
            )
        );
    }
});
var Footer = React.createClass({
    displayName: 'Footer',

    render: function () {
        return React.createElement(
            'footer',
            null,
            '@',
            this.props.company,
            ' copyrights'
        );
    }
});
ReactDOM.render(React.createElement(App, { training: 'React' }), document.getElementById('continer'));