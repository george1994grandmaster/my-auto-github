import './App.css';
import data from "./data";
import HeaderComponent from "./components/header";
import Navigator from "./components/routes";
import { BrowserRouter as Router } from 'react-router-dom';
import BrowsGettingalldatas from './components/api';
import { useState } from 'react';

const App = () => {
	const { productItems } = data;
	const[cartItems, setCartItems] = useState([]);
	const[quantity, setQuantity] = useState(0);
	
	

	return (
		<div>
			fgfffgfgf
			<BrowsGettingalldatas/>
		</div>
	)
};

export default App;
