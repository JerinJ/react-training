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
var SearchInput = React.createClass({
    _onSearchClick: function() {
        this.props.onSearchChange(this.refs.searchText.value);
    },
    render: function() {
        return (
            <div className="input-group searchSection">
                <input type="text" className="form-control" placeholder="Search" aria-describedby="basic-addon2" ref="searchText"/>
                <span className="input-group-addon" id="basic-addon2" onClick={this._onSearchClick}>Search</span>
            </div>
        );
    }
});
var TableComponent = React.createClass({
	getInitialState: function() {
        return {
            tableData: [],
            actualData: []
        };
    },
    componentDidMount: function() {
        var self = this;
        $.getJSON('/resource/table.json', function (obj) {
            self.setState({
                tableData: obj.ItemList,
                actualData: obj.ItemList
            });
        });
    },
	componentWillReceiveProps: function(nextProps) {
		var searchText = nextProps.searchTextValue.toUpperCase();
		var entry, results = [];
		if(searchText.length > 0) {
            for (var index = 0; index < this.state.actualData.length; index++) {
                entry = this.state.actualData[index];
                if (entry && entry.Value && entry.Value.toString().toUpperCase().indexOf(searchText) !== -1) {
                    results.push(entry);
                } else if (entry && entry.DisplayOrder && entry.DisplayOrder.toString().toUpperCase().indexOf(searchText) !== -1) {
                    results.push(entry);
                } else if (entry && entry.ValueByLabel && entry.ValueByLabel.toString().toUpperCase().indexOf(searchText) !== -1) {
                    results.push(entry);
                } else if (entry && entry.ValueType && entry.ValueType.toString().toUpperCase().indexOf(searchText) !== -1) {
                    results.push(entry);
                } else if (entry && entry.label && entry.label.toString().toUpperCase().indexOf(searchText) !== -1) {
                    results.push(entry);
                }
            }
            this.setState({
                tableData: results
            });
        } else {
            this.setState({
                tableData: this.state.actualData
            });
        }
	},
    render: function() {
        return (
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
                    {
                        this.state.tableData.length > 0 ? (
                            this.state.tableData.map(function(object, i) {
                                return (
                                    <Rowdata key={i} rowValues={object} />
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={6}>No data found</td>
                            </tr>
                        )
                    }
                </tbody> 
            </table>
        );
    }
});
var Content = React.createClass({
    getInitialState: function() {
        return {
            searchTextValue: ''
        };
    },
    onSearchChange: function(searchValue) {
        this.setState({
        	searchTextValue: searchValue.toUpperCase()
        });        
    },
    render: function() {
        return (
            <div>
                <SearchInput onSearchChange={this.onSearchChange} />
                <TableComponent searchTextValue={this.state.searchTextValue}/>
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