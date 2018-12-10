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
var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {};


    _this.playAudio = _this.playAudio.bind(_this);return _this;
  }_createClass(App, [{ key: "playAudio", value: function playAudio(

    e) {
      switch (e.target.value) {
        case "Q":
          this.setState({ audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' });
          break;
        case "W":
          this.setState({ audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' });
          break;
        case "E":
          this.setState({ audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' });
          break;
        case "A":
          this.setState({ audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' });
          break;
        case "S":
          this.setState({ audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' });
          break;
        case "D":
          this.setState({ audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' });
          break;
        case "Z":
          this.setState({ audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' });
          break;
        case "X":
          this.setState({ audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' });
          break;
        case "C":
          this.setState({ audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' });
          break;}

      this.state.audio.play();
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement("h1", null, "Drum Kit | FreeCodeCamp"),
          React.createElement(DrumMachine, { play: this.playAudio })));


    } }]);return App;}(React.Component);var


DrumMachine = function (_React$Component2) {_inherits(DrumMachine, _React$Component2);function DrumMachine() {_classCallCheck(this, DrumMachine);return _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).apply(this, arguments));}_createClass(DrumMachine, [{ key: "render", value: function render()
    {
      return React.createElement("div", { id: "drum-machine" },
        React.createElement("div", { id: "display" }, "Burty Base Drum"),
        React.createElement("div", { "class": "drum-pad" },
          React.createElement("div", { "class": "row" },
            React.createElement("button", { onClick: this.props.play, onKeyPress: this.props.play, value: "Q" }, "Q"),
            React.createElement("button", { onClick: this.props.play, onKeyPress: this.props.play, value: "W" }, "W"),
            React.createElement("button", { onClick: this.props.play, onKeyPress: this.props.play, value: "E" }, "E")),

          React.createElement("div", { "class": "row" },
            React.createElement("button", { onClick: this.props.play, onKeyPress: this.props.play, value: "A" }, "A"),
            React.createElement("button", { onClick: this.props.play, onKeyPress: this.props.play, value: "S" }, "S"),
            React.createElement("button", { onClick: this.props.play, onKeyPress: this.props.play, value: "D" }, "D")),

          React.createElement("div", { "class": "row" },
            React.createElement("button", { onClick: this.props.play, onKeyPress: this.props.play, value: "Z" }, "Z"),
            React.createElement("button", { onClick: this.props.play, onKeyPress: this.props.play, value: "X" }, "X"),
            React.createElement("button", { onClick: this.props.play, onKeyPress: this.props.play, value: "C" }, "C"))));



    } }]);return DrumMachine;}(React.Component);


ReactDOM.render(
React.createElement(App, null),
document.getElementById('app'));