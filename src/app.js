/// Import modules reqiored by this module.
/// The {} means import a named component (not hte default one).
import React, { Component } from 'react';
/// BetterClock
/// Crestte an idependent class to represent a better clock component.
class BetterClock extends Component{
	/// All React component have a render method which must return something
	render(){

		const Now =(new Date().toLocaleTimeString());
		const A = 123;
		const B = 345;
		const C = A + B;
		console.log("what the heck is it rendering ? + A=" + A);


		//Form markup to display the state. THERE MUST BE ONLY ONE ROOT 
		return(
			///<div>The time goes here</div>
			<div>
				<div>{Now}</div>
				<div>{C}</div>
			</div>
		)
	}

}

/// App
class App extends Component {

	render() {

		console.log("[App] Render");

		return (

			<div className="app">

				<h1>The local time at Bow Valley College, Calgary, Alberta, Canada, Earth, Universe is  --</h1>
				<h2>Hey! You are Late Again DIPTI!</h2>

				{/*Use the BetterClock componet.*/}
				<BetterClock/>
				<BetterClock/>

			</div>
			

		);

	}

}

export default App;
