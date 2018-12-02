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
      number: 0,
      nextnumber: 0,
      operator: '',
      final: 0 };

    _this.handleNumberClick = _this.handleNumberClick.bind(_this);
    _this.handleOperatorClick = _this.handleOperatorClick.bind(_this);
    _this.handleEvaluateClick = _this.handleEvaluateClick.bind(_this);
    _this.handleClear = _this.handleClear.bind(_this);return _this;
  }_createClass(Calculator, [{ key: 'handleNumberClick', value: function handleNumberClick(
    e) {
      if (this.state.number != 0 && this.state.operator != '') {
        this.setState({ nextnumber: e.target.value });
      } else {
        this.setState({ number: e.target.value });
      }
    } }, { key: 'handleOperatorClick', value: function handleOperatorClick(
    e) {
      this.setState({ operator: e.target.value });
    } }, { key: 'handleEvaluateClick', value: function handleEvaluateClick()
    {
      var total = 0;
      switch (this.state.operator) {
        case '+':
          total = parseInt(this.state.number) + parseInt(this.state.nextnumber);
        case '-':
          total = parseInt(this.state.number) - parseInt(this.state.nextnumber);
        case '*':
          total = parseInt(this.state.number) * parseInt(this.state.nextnumber);
        case '/':
          total = parseInt(this.state.number) / parseInt(this.state.nextnumber);}

      this.setState({ final: total.toString() });
    } }, { key: 'handleClear', value: function handleClear()
    {
      this.setState({ number: 0, nextnumber: 0, operator: '', final: 0 });
    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement('div', { id: 'display' },
            React.createElement('h1', null, this.state.final),
            React.createElement('p', null, this.state.operator)),

          React.createElement(Buttons, { number: this.handleNumberClick, operator: this.handleOperatorClick, evaluate: this.handleEvaluateClick, clear: this.handleClear })));


    } }]);return Calculator;}(React.Component);
;var

Buttons = function (_React$Component2) {_inherits(Buttons, _React$Component2);function Buttons() {_classCallCheck(this, Buttons);return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));}_createClass(Buttons, [{ key: 'render', value: function render()

    {
      return React.createElement('div', { 'class': 'row' },
        React.createElement('div', { 'class': 'col-lg-3' },
          React.createElement('button', { id: 'one', value: '1', onClick: this.props.number }, '1'),
          React.createElement('button', { id: 'two', value: '2', onClick: this.props.number }, '2'),
          React.createElement('button', { id: 'three', value: '3', onClick: this.props.number }, '3'),
          React.createElement('button', { id: 'add', value: '+', onClick: this.props.operator }, '+')),

        React.createElement('div', { 'class': 'col-lg-3' },
          React.createElement('button', { id: 'four', value: '4', onClick: this.props.number }, '4'),
          React.createElement('button', { id: 'five', value: '5', onClick: this.props.number }, '5'),
          React.createElement('button', { id: 'six', value: '6', onClick: this.props.number }, '6'),
          React.createElement('button', { id: 'subtract', value: '-', onClick: this.props.operator }, '-')),

        React.createElement('div', { 'class': 'col-lg-3' },
          React.createElement('button', { id: 'seven', value: '7', onClick: this.props.number }, '7'),
          React.createElement('button', { id: 'eight', value: '8', onClick: this.props.number }, '8'),
          React.createElement('button', { id: 'nine', value: '9', onClick: this.props.number }, '9'),
          React.createElement('button', { id: 'multiply', value: '*', onClick: this.props.operator }, '*')),

        React.createElement('div', { 'class': 'col-lg-3' },
          React.createElement('button', { id: 'decimal', value: '.' }, '.'),
          React.createElement('button', { id: 'zero', value: '0', onClick: this.props.number }, '0'),
          React.createElement('button', { id: 'clear', value: 'c', onClick: this.props.clear }, 'C'),
          React.createElement('button', { id: 'divide', value: '/', onClick: this.props.operator }, '/')),

        React.createElement('div', { 'class': 'col-lg-12' },
          React.createElement('button', { id: 'equals', value: '=', onClick: this.props.evaluate }, '=')));



    } }]);return Buttons;}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));