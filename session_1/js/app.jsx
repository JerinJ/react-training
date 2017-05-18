var App = React.createClass({
    render: function() {
        var trainingData = {
            name: 'React JS',
            tech: 'FET',
            company: 'Cybage'
        };
        return (
            <div>
                <Header training={trainingData.name} />
                <Content tech={trainingData.tech}/>
                <Footer company={trainingData.company}/>
            </div>
        );
    }
});
var Header = React.createClass({
    getInitialState: function() {
        return {
            status: 'biginner'
        };
    },
    render: function() {
        return (
            <header>
                <h1>{this.props.training} tutorial</h1>
                <h3>{this.state.status}</h3>
            </header>
        );
    }
});
var Content = React.createClass({
    getDefaultProps: function() {
        return {
            trainner: 'Pratik'
        }
    },
    getInitialState: function() {
        return {
            duration: 1.5
        }
    },
    componentWillMount: function() {
        console.log('componentWillMount');
    },
    componentDidMount: function() {
        console.log('componentDidMount');
    },
    propTypes: {
        tech: React.PropTypes.string.isRequired
    },
    _onInputChnage: function(e) {
        console.log(e.target.value);
        this.setState({
            duration: e.target.value
        });
    },
    render: function() {
        console.log('render');
        return (
            <section>
                <div>
                    Technology used: {this.props.tech}
                </div>
                <div>
                    Trainner: {this.props.trainner}
                </div>
                <div>
                    Duration: {this.state.duration} Hr
                </div>
                <div>
                    Give duration: <input name="name" type="text" value={this.state.duration} onChange={this._onInputChnage}/>
                </div>
            </section>
        );
    }
});
var Footer = React.createClass({
    render: function() {
        return (
            <footer>
                @{this.props.company} copyrights
            </footer>
        );
    }
});
ReactDOM.render(
    <App training="React"/>,
    document.getElementById('continer')
);