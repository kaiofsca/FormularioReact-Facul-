import { Link } from "react-router-dom";

import './home.css'

function Home() {
	return (
		<div className="app">
			<h1>GRUPO REACT</h1>
			<button>
				<Link className="btn-link" to="/form">
        			FORMULÁRIO
      			</Link>
			</button>
		</div>
	);
}

export default Home;