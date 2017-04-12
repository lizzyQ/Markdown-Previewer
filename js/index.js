"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_React$Component) {
  _inherits(Info, _React$Component);

  function Info() {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Info.prototype.render = function render() {
    return React.createElement(
      "div",
      { id: "info" },
      React.createElement(
        "h1",
        { id: "title" },
        "GitHub-flavored Markdown Previewer"
      ),
      React.createElement(
        "p",
        null,
        "Type in the left and view in the right box. For syntax reference, ",
        React.createElement(
          "a",
          { href: "https://help.github.com/articles/basic-writing-and-formatting-syntax/" },
          "click me"
        )
      )
    );
  };

  return Info;
}(React.Component);

;

var Previewer = function (_React$Component2) {
  _inherits(Previewer, _React$Component2);

  function Previewer() {
    _classCallCheck(this, Previewer);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this));

    _this2.state = {
      text: "View Here\n====="
    };
    return _this2;
  }

  Previewer.prototype.handleChange = function handleChange() {
    this.setState({
      // what is the difference ? text: event.target.value
      text: this.refs.content.value
    });
  };

  Previewer.prototype.render = function render() {
    var markdown = marked(this.state.text);
    return React.createElement(
      "div",
      null,
      React.createElement(Info, null),
      React.createElement(
        "div",
        { className: "main-content" },
        React.createElement("textarea", { rows: "20", cols: "50", ref: "content", onChange: this.handleChange.bind(this) }),
        React.createElement("div", { id: "output-area", dangerouslySetInnerHTML: { __html: markdown } })
      )
    );
  };

  return Previewer;
}(React.Component);

ReactDOM.render(React.createElement(Previewer, null), document.getElementById('container'));
