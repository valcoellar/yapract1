class HelloWorld extends React.Component {
	render(){


return (
	<div title="Outer div">
		<h1>Hello World!!</h1>
	</div>



	);
	}
}


const element = <HelloWorld />;

ReactDOM.render(element, document.getElementById('contents'));

