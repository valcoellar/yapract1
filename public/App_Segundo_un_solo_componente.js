class HelloWorld extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      title: "Outer div"
    }, /*#__PURE__*/React.createElement("h1", null, "Hello World!!"));
  }
}
const element = /*#__PURE__*/React.createElement(HelloWorld, null);
ReactDOM.render(element, document.getElementById('contents'));