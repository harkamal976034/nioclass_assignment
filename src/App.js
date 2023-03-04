import Question from "./components/Question";
import {MathJaxContext} from "better-react-mathjax"

function App() {
  return (
		<div className="bg-stone-100">
			<MathJaxContext>
				<Question />
			</MathJaxContext>
		</div>
	);
}

export default App;
