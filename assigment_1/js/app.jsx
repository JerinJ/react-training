var App = React.createClass({
    render: function() {
        var formData = {
            firstName: 'Jeerin',
            lastName: 'John',
            company: 'Cybage',
            training: 'React JS'
        };
        return (
            <div className="col-md-12">
                <Header training={formData.training} />
                <Content formData={formData}/>
                <Footer company={formData.company}/>
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
    render: function() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" value="test" ref="firstName" />
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" ref="lastName" />
                    </div>
                    <input type="button" class="btn btn-default" onClick={this._onSave} value="Save" />
                </form>
                <div>
                    Summary: 
                     <div class="form-group">
                        <label>First Name</label>
                        <span >{this.state.firstName}</span>
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
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