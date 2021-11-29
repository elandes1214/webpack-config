import "../styles/index.scss";
import Recipes from "./Recipes"
import hair from "../images/best_hair_day.png"

const App = () => {
	return (
		<>
			<section className="hero"></section>
			<main>
				<section>
					<h1>Oh Hai, React</h1>
				</section>
				<img src={hair} alt="hair" width="250" />
				<Recipes />
			</main>
		</>
	);
};

export default App