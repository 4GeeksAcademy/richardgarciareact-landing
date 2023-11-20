import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<br/>
			<div className="row">
				<div className="col">
					<Card imagen="https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg" titulo="Perro 1"/>
					</div>
					<div className="col">
					<Card imagen="https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg"  titulo="Perro 2"/>
					</div>
					<div className="col">
					<Card imagen="data:image/jpeg;base64,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"  titulo="Perro 3"/>
					</div>
					<div className="col">
					<Card imagen="https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg"  titulo="Perro 4"/>
					</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
