import React from 'react'
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import NavBar from './components/NavBar'

function App() {
	return (
		<Router>
			<div>
				<nav>
          <NavBar />
        </nav>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/portfolio">
						<Portfolio />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
