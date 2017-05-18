var App = React.createClass({
    getInitialState: function() {
        return {
            firstName: 'Jeerin',
            lastName: 'John',
            company: 'Cybage',
            training: 'React JS'
        };
    },
    render: function() {
        return (
            <div className='col-md-12'>
                <Header training={this.props.training} />
                <Content />
                <Footer company={this.props.company}/>
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
                <h1 className='test' data-attr='test'>{this.props.training} tutorial</h1>
                <h3>{this.state.status}</h3>
            </header>
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
    <App training='React' company='Cybage'/>,
    document.getElementById('continer')
);