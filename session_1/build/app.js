(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var App = React.createClass({
    displayName: 'App',

    render: function render() {
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

    getInitialState: function getInitialState() {
        return {
            status: 'biginner'
        };
    },
    render: function render() {
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

    getDefaultProps: function getDefaultProps() {
        return {
            trainner: 'Pratik'
        };
    },
    getInitialState: function getInitialState() {
        return {
            duration: 1.5
        };
    },
    componentWillMount: function componentWillMount() {
        console.log('componentWillMount');
    },
    componentDidMount: function componentDidMount() {
        console.log('componentDidMount');
    },
    propTypes: {
        tech: React.PropTypes.string.isRequired
    },
    _onInputChnage: function _onInputChnage(e) {
        console.log(e.target.value);
        this.setState({
            duration: e.target.value
        });
    },
    render: function render() {
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

    render: function render() {
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxNQUFNLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUN4QixZQUFRLGtCQUFXO0FBQ2YsWUFBSSxlQUFlO0FBQ2Ysa0JBQU0sVUFEUztBQUVmLGtCQUFNLEtBRlM7QUFHZixxQkFBUztBQUhNLFNBQW5CO0FBS0EsZUFDSTtBQUFBO0FBQUE7QUFDSSxnQ0FBQyxNQUFELElBQVEsVUFBVSxhQUFhLElBQS9CLEdBREo7QUFFSSxnQ0FBQyxPQUFELElBQVMsTUFBTSxhQUFhLElBQTVCLEdBRko7QUFHSSxnQ0FBQyxNQUFELElBQVEsU0FBUyxhQUFhLE9BQTlCO0FBSEosU0FESjtBQU9IO0FBZHVCLENBQWxCLENBQVY7QUFnQkEsSUFBSSxTQUFTLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUMzQixxQkFBaUIsMkJBQVc7QUFDeEIsZUFBTztBQUNILG9CQUFRO0FBREwsU0FBUDtBQUdILEtBTDBCO0FBTTNCLFlBQVEsa0JBQVc7QUFDZixlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFLLHFCQUFLLEtBQUwsQ0FBVyxRQUFoQjtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQTtBQUFLLHFCQUFLLEtBQUwsQ0FBVztBQUFoQjtBQUZKLFNBREo7QUFNSDtBQWIwQixDQUFsQixDQUFiO0FBZUEsSUFBSSxVQUFVLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUM1QixxQkFBaUIsMkJBQVc7QUFDeEIsZUFBTztBQUNILHNCQUFVO0FBRFAsU0FBUDtBQUdILEtBTDJCO0FBTTVCLHFCQUFpQiwyQkFBVztBQUN4QixlQUFPO0FBQ0gsc0JBQVU7QUFEUCxTQUFQO0FBR0gsS0FWMkI7QUFXNUIsd0JBQW9CLDhCQUFXO0FBQzNCLGdCQUFRLEdBQVIsQ0FBWSxvQkFBWjtBQUNILEtBYjJCO0FBYzVCLHVCQUFtQiw2QkFBVztBQUMxQixnQkFBUSxHQUFSLENBQVksbUJBQVo7QUFDSCxLQWhCMkI7QUFpQjVCLGVBQVc7QUFDUCxjQUFNLE1BQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QjtBQUR0QixLQWpCaUI7QUFvQjVCLG9CQUFnQix3QkFBUyxDQUFULEVBQVk7QUFDeEIsZ0JBQVEsR0FBUixDQUFZLEVBQUUsTUFBRixDQUFTLEtBQXJCO0FBQ0EsYUFBSyxRQUFMLENBQWM7QUFDVixzQkFBVSxFQUFFLE1BQUYsQ0FBUztBQURULFNBQWQ7QUFHSCxLQXpCMkI7QUEwQjVCLFlBQVEsa0JBQVc7QUFDZixnQkFBUSxHQUFSLENBQVksUUFBWjtBQUNBLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFDc0IscUJBQUssS0FBTCxDQUFXO0FBRGpDLGFBREo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUNlLHFCQUFLLEtBQUwsQ0FBVztBQUQxQixhQUpKO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFDZSxxQkFBSyxLQUFMLENBQVcsUUFEMUI7QUFBQTtBQUFBLGFBUEo7QUFVSTtBQUFBO0FBQUE7QUFBQTtBQUNtQiwrQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixPQUFPLEtBQUssS0FBTCxDQUFXLFFBQWpELEVBQTJELFVBQVUsS0FBSyxjQUExRTtBQURuQjtBQVZKLFNBREo7QUFnQkg7QUE1QzJCLENBQWxCLENBQWQ7QUE4Q0EsSUFBSSxTQUFTLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUMzQixZQUFRLGtCQUFXO0FBQ2YsZUFDSTtBQUFBO0FBQUE7QUFBQTtBQUNNLGlCQUFLLEtBQUwsQ0FBVyxPQURqQjtBQUFBO0FBQUEsU0FESjtBQUtIO0FBUDBCLENBQWxCLENBQWI7QUFTQSxTQUFTLE1BQVQsQ0FDSSxvQkFBQyxHQUFELElBQUssVUFBUyxPQUFkLEdBREosRUFFSSxTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FGSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdHJhaW5pbmdEYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAnUmVhY3QgSlMnLFxyXG4gICAgICAgICAgICB0ZWNoOiAnRkVUJyxcclxuICAgICAgICAgICAgY29tcGFueTogJ0N5YmFnZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIHRyYWluaW5nPXt0cmFpbmluZ0RhdGEubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50IHRlY2g9e3RyYWluaW5nRGF0YS50ZWNofS8+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGNvbXBhbnk9e3RyYWluaW5nRGF0YS5jb21wYW55fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG52YXIgSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdiaWdpbm5lcidcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy50cmFpbmluZ30gdHV0b3JpYWw8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLnN0YXR1c308L2gzPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxudmFyIENvbnRlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRyYWlubmVyOiAnUHJhdGlrJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLjVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbE1vdW50Jyk7XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnREaWRNb3VudCcpO1xyXG4gICAgfSxcclxuICAgIHByb3BUeXBlczoge1xyXG4gICAgICAgIHRlY2g6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG4gICAgfSxcclxuICAgIF9vbklucHV0Q2huYWdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXInKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgVGVjaG5vbG9neSB1c2VkOiB7dGhpcy5wcm9wcy50ZWNofVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFRyYWlubmVyOiB7dGhpcy5wcm9wcy50cmFpbm5lcn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBEdXJhdGlvbjoge3RoaXMuc3RhdGUuZHVyYXRpb259IEhyXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgR2l2ZSBkdXJhdGlvbjogPGlucHV0IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5kdXJhdGlvbn0gb25DaGFuZ2U9e3RoaXMuX29uSW5wdXRDaG5hZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcbnZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICBAe3RoaXMucHJvcHMuY29tcGFueX0gY29weXJpZ2h0c1xyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEFwcCB0cmFpbmluZz1cIlJlYWN0XCIvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250aW5lcicpXHJcbik7Il19
