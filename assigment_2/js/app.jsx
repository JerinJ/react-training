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
var Rowdata = React.createClass({
    getDefaultProps: function() {
        return {
            rowValues: {
                DisplayOrder:2,
                Value:1,
                ValueByLabel:"Volume Effectiveness",
                ValueType:"Return",
                label:"Volume"
            }
        }
    },
    render: function() {
        return (
            <tr>
                <td>{this.props.rowValues.Value}</td>
                <td>{this.props.rowValues.DisplayOrder}</td>
                <td>{this.props.rowValues.ValueByLabel}</td>
                <td>{this.props.rowValues.ValueType}</td>
                <td>{this.props.rowValues.label}</td>
            </tr>
        );
    }
});
var Content = React.createClass({
    getInitialState: function() {
        return {
            tableData: []
        };
    },
    componentDidMount: function() {
        var self = this;
        $.getJSON('/resource/table.json', function (obj) {
            console.log('jerin', obj);
            self.setState({
                tableData: obj.ItemList
            });
        });
    },
    render: function() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>DisplayOrder</th>
                            <th>Value Label</th>
                            <th>Value Type</th>
                            <th>label</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {this.state.tableData.map(function(object, i){
                            return (
                                <Rowdata key={i} rowValues={object} />
                            );
                        })}
                    </tbody> 
                </table>
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