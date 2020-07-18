import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homepage/homePage';
import ShopPage from './Pages/shop/shop';
import Header from './components/header/header';

function App() {
	return (
		<Router>
			<div>
        <Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />

				</Switch>
			</div>
		</Router>
	);
}

export default App;
