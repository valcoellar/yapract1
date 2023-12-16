// --------- Updating the State
// lifting State Up


const initialIssues = [
	{
	id: 1,
	status: "New",
	owner: "Ravan",
	effort: 5,
	created: new Date('2018-08-15'),
	due: undefined,
	title: 'Error in console when clicking Add',
	},
	{
	id: 2,
	status: "Assigned",
	owner: "Eddie",
	effort: 14,
	created: new Date('2018-08-16'),
	due: new Date('2018-08-30'),
	title: 'Missing bottom border on panel',
	}
];

const sampleIssue = {
	status: 'New',
	owner: 'Pieta',
	title: 'Completion date should be optional',
};



// ---------------------------------------------
class IssueFilter extends React.Component {
	render(){
return (
	<div>
		<div>This is a Placeholder for the issue filter</div>
	</div>
	);
	}
}

// ---------------------------------------------
// Passing data using Children IssueTable --> IssueRow
class IssueTable extends React.Component {
	// --- setting the initial state must be done in the contructor ---
	constructor() {
	super();
	this.state = { issues: [] };

	setTimeout(() => {
	this.createIssue( sampleIssue );
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
		this.setState({ issues: initialIssues });
		}, 1000);
	}

	createIssue( issue ) {
		issue.id = this.state.issues.length + 1;  		//gets the length of id for add 1 and make the next ID
		issue.created = new Date(); 		// gets the current date and time
		const newIssueList = this.state.issues.slice(); // copy the current state
		newIssueList.push(issue);  		// add the new issue to the end of the list
		this.setState({ issues: newIssueList }); // update the state
	}



	render(){
		const rowStyle = {border: "1px solid silver", padding: 4};

	const issueRows = this.state.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);

return(
<table className="bordered-table">
        <thead>
          <tr>
            	<th>ID</th>
            	<th>Status</th>
		<th>Owner</th>
		<th>Created</th>
		<th>Effort</th>
		<th>Due Date</th>
		<th>Title</th>
          </tr>
        </thead>
	<tbody>
{/* Using Map for Dynamic rendering */}
	{issueRows }

        </tbody>
	</table>
	);
	}
}

// ---------------------------------------------
class IssueRow extends React.Component {
	render(){
		const issue = this.props.issue;
return(
	<tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
	<td>{issue.owner}</td>
	<td>{issue.created.toDateString()}</td>
	<td>{issue.effort}</td>
	<td>{issue.due ? issue.due.toDateString() : ''}</td>
	<td>{issue.title}</td>
      </tr>


	);
	}
}




// ---------------------------------------------
class IssueAdd extends React.Component {
	render(){
return(
<div>This is a placeholder for a form to add an issue.</div>
	);
	}
}




// invocacion de los componentes

class IssueList extends React.Component {
	render(){
return(
	<React.Fragment>
	<h1>Issue Tracker</h1>
		<IssueFilter />	
	<hr />
		<IssueTable />
	<hr />
		<IssueAdd />
	</React.Fragment>
);
}
}




const element = <IssueList />;

ReactDOM.render(element, document.getElementById('contents'));
