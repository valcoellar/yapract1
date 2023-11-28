// --------- Dynamic Composition Whith State
// progammatically generated set of components from the state
// using map

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
	this.state = { issues: initialIssues };
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




// invocacion de lo s componentes

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