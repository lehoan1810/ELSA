import Container from "./components/container/Container";
import Header from "./components/header/Header";
import "./App.css";
import Footer from "./components/footer/Footer";
function App() {
	return (
		<>
			<div className="wrapper">
				<Header />
				<Container />
				<Footer />
			</div>
		</>
	);
}

export default App;
