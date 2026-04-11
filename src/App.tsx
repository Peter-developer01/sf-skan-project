import Header from "./components/Header";

function App() {
	return (
		<>
			<Header loggedIn={false} />
			<Header loggedIn={true} />
		</>
	);
}

export default App;
