// --------- Updating the State
// lifting State Up

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
const sampleIssue = {
  status: 'New',
  owner: 'Pieta',
  title: 'Completion date should be optional'
};

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
    setTimeout(() => {
      this.createIssue(sampleIssue);
    }, 2000);
  }

  // This method is called as soon as the components representation has been 
  // converted and inserted into the DOM.
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
  createIssue(issue) {
    issue.id = this.state.issues.length + 1; //gets the length of id for add 1 and make the next ID
    issue.created = new Date(); // gets the current date and time
    const newIssueList = this.state.issues.slice(); // copy the current state
    newIssueList.push(issue); // add the new issue to the end of the list
    this.setState({
      issues: newIssueList
    }); // update the state
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

// invocacion de los componentes

class IssueList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
  }
}
const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));