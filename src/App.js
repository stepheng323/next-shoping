import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homepage/homePage';
import ShopPage from './Pages/shop/shop';
import Header from './components/header/header';
import SignInSignUp from './Pages/signInSignUp/signInSignUp';

function App() {
	return (
		<Router>
			<div>
        <Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SignInSignUp} />

				</Switch>
			</div>
		</Router>
	);
}

export default App;
