var Dispatcher = require('./../../node_modules/flux/lib/Dispatcher.js');
var ListStore = require('./list-store.jsx');
var Emitter = require('./../../lib/microevent.js');
var AppDispatcher = new Dispatcher();
Emitter.mixin(ListStore);


var Content = React.createClass({    
    componentDidMount: function() {
        ListStore.bind('change', this.listChaanged);
    },
    componentWillUnmount: function() {
        ListStore.unbind('chnage', this.listChaanged);
    },
    render: function() {
        var items = ListStore.items.map(function(item) {
            return (
                <li>{item}</li>
            );
        });
        return (
            <section>
                <div>
                    To Do:
                </div>
                <div>
                    <input type="text" id="todoData" />
                </div>
                <div>
                    <button onClick={this.addNewItem}>Add</button>
                </div>
                <div>
                    <ul>{items}</ul>
                </div>
            </section>
        );
    },
    addNewItem: function() {
        var item = document.getElementById('todoData').value;
        AppDispatcher.dispatch({
            actionName: 'click-action',
            data: item
        });
    },
    listChaanged: function() {
        this.forceUpdate();
    }
});
AppDispatcher.register(function(action) {
    switch(action.actionName) {
        case 'click-action':
            ListStore.items.push(action.data);
            ListStore.trigger('change');
        break;
    }
});
module.exports = Content;