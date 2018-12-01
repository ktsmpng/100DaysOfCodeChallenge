var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
var Calculator = function (_React$Component) {_inherits(Calculator, _React$Component);
  function Calculator(props) {_classCallCheck(this, Calculator);var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));
    _this.state = {
      message: "" };return _this;

  }_createClass(Calculator, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { "class": "row" },
          React.createElement("div", { "class": "col-xs-6" },
            React.createElement("h1", null, "hello"),
            React.createElement(Buttons, null))));


    } }]);return Calculator;}(React.Component);
;var

Buttons = function (_React$Component2) {_inherits(Buttons, _React$Component2);
  function Buttons(props) {_classCallCheck(this, Buttons);var _this2 = _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this,
    props));
    _this2.state = {};return _this2;
  }_createClass(Buttons, [{ key: "render", value: function render()
    {
      return React.createElement("div", { "class": "row" },
        React.createElement("div", { "class": "col-lg-4" },
          React.createElement("button", null, "1"),
          React.createElement("button", null, "2"),
          React.createElement("button", null, "3")),

        React.createElement("div", { "class": "col-lg-4" },
          React.createElement("button", null, "4"),
          React.createElement("button", null, "5"),
          React.createElement("button", null, "6")),

        React.createElement("div", { "class": "col-lg-4" },
          React.createElement("button", null, "7"),
          React.createElement("button", null, "8"),
          React.createElement("button", null, "9")));



    } }]);return Buttons;}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));