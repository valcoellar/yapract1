// --------- Dynamic Composition Whith Async State
// progammatically generated set of components from the state
// using map ans simulated api call with setTimeout

const initialIssues = [{
  id: 1,
  status: "New",
  owner: "Ravan",
  effort: 5,
  created: new Date('2018-08-15'),
  due: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2,
  status: "Assigned",
  owner: "Eddie",
  effort: 14,
  created: new Date('2018-08-16'),
  due: new Date('2018-08-30'),
  title: 'Missing bottom border on panel'
}];

// ---------------------------------------------
class IssueFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "This is a Placeholder for the issue filter"));
  }
}

// ---------------------------------------------
// Passing data using Children IssueTable --> IssueRow
class IssueTable extends React.Component {
  // --- setting the initial state must be done in the contructor ---
  constructor() {
    super();
    this.state = {
      issues: []
    };
  }

  // This methos is called as soon as the components representation has been 
  // converted and iserted into the DOM.
  componentDidMount() {
    this.loadData();
  }

  // simulating API call for get the state with setTimeOut
  loadData() {
    setTimeout(() => {
      this.setState({
        issues: initialIssues
      });
    }, 1000);
  }
  render() {
    const rowStyle = {
      border: "1px solid silver",
      padding: 4
    };
    const issueRows = this.state.issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    }));
    return /*#__PURE__*/React.createElement("table", {
      className: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
  }
}

// ---------------------------------------------
class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.due ? issue.due.toDateString() : ''), /*#__PURE__*/React.createElement("td", null, issue.title));
  }
}

// ---------------------------------------------
class IssueAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a form to add an issue.");
  }
}

// invocacion de lo s componentes

class IssueList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
  }
}
const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));