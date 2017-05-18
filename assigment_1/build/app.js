var App = React.createClass({
    displayName: 'App',

    render: function () {
        var formData = {
            firstName: 'Jeerin',
            lastName: 'John',
            company: 'Cybage',
            training: 'React JS'
        };
        return React.createElement(
            'div',
            { className: 'col-md-12' },
            React.createElement(Header, { training: formData.training }),
            React.createElement(Content, { formData: formData }),
            React.createElement(Footer, { company: formData.company })
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
                { className: 'test', 'data-attr': 'test' },
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
            firstName: 'Taylor',
            lastName: 'Swift',
            company: 'Cybage'
        };
    },
    getInitialState: function () {
        return {
            firstName: this.props.formData.firstName,
            lastName: this.props.formData.lastName,
            company: this.props.formData.company
        };
    },
    propTypes: {
        firstName: React.PropTypes.string.isRequired,
        lastName: React.PropTypes.string.isRequired,
        company: React.PropTypes.string.isRequired
    },
    _onSave: function () {
        this.setState({
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value
        });
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                null,
                React.createElement(
                    'div',
                    { 'class': 'form-group' },
                    React.createElement(
                        'label',
                        { 'for': 'firstName' },
                        'First Name'
                    ),
                    React.createElement('input', { type: 'text', className: 'form-control', id: 'firstName', placeholder: 'First Name', value: 'test', ref: 'firstName' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'form-group' },
                    React.createElement(
                        'label',
                        { 'for': 'lastName' },
                        'Last Name'
                    ),
                    React.createElement('input', { type: 'text', className: 'form-control', id: 'lastName', placeholder: 'Last Name', ref: 'lastName' })
                ),
                React.createElement('input', { type: 'button', 'class': 'btn btn-default', onClick: this._onSave, value: 'Save' })
            ),
            React.createElement(
                'div',
                null,
                'Summary:',
                React.createElement(
                    'div',
                    { 'class': 'form-group' },
                    React.createElement(
                        'label',
                        null,
                        'First Name'
                    ),
                    React.createElement(
                        'span',
                        null,
                        this.state.firstName
                    )
                ),
                React.createElement(
                    'div',
                    { 'class': 'form-group' },
                    React.createElement(
                        'label',
                        null,
                        'Last Name'
                    ),
                    React.createElement(
                        'span',
                        null,
                        this.state.lastName
                    )
                )
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