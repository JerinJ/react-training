var App = React.createClass({
    getInitialState: function() {
        return {
            firstName: 'Jeerin',
            lastName: 'John',
            company: 'Cybage',
            training: 'React JS'
        };
    },
    _onContentChnage: function(value) {
        console.log(value);
        this.setState({
            firstName: value
        });
    },
    render: function() {
        return (
            <div className="col-md-12">
                <Header training={this.state.training} />
                <Content formData={this.state} inputChange={this._onContentChnage}/>
                <Footer company={this.state.firstName}/>
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
                <h1 className="test" data-attr="test">{this.props.training} tutorial</h1>
                <h3>{this.state.status}</h3>
            </header>
        );
    }
});
var Content = React.createClass({
    getDefaultProps: function() {
        return {
            firstName: 'Taylor',
            lastName: 'Swift',
            company: 'Cybage'
        }
    },
    getInitialState: function() {
        return {
            firstName: this.props.formData.firstName,
            lastName: this.props.formData.lastName,
            company: this.props.formData.company
        }
    },
    propTypes: {
        firstName: React.PropTypes.string.isRequired,
        lastName: React.PropTypes.string.isRequired,
        company: React.PropTypes.string.isRequired
    },
    _onSave: function() {
        this.setState({
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
        });
    },
    _onFirstName: function(e) {
        this.props.inputChange(e.target.value);
        this.setState({
            firstName: e.target.value
        });
    },
    render: function() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={this._onFirstName} ref="firstName" />
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" ref="lastName" />
                    </div>
                    <br />
                    <br />
                    <input type="button" class="btn btn-default" onClick={this._onSave} value="Save" />
                </form>
                <br />
                <br />
                <br />
                <div>
                    Summary: 
                    <br />
                     <div class="form-group">
                        <label>First Name</label>&nbsp;&nbsp;
                        <span>{this.state.firstName}</span>
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>&nbsp;&nbsp;
                        <span>{this.state.lastName}</span>
                    </div>
                </div>
            </div>
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