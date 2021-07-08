import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import LoginInfo from "pages/LoginInfo";
import Write from "pages/Write";
// import LoginPopup from "components/LoginPopup";
import GlobalStyles from "styles/GlobalStyles";

function App() {
	return (
    <div className="App">
      <GlobalStyles/>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login-info" exact component={LoginInfo} />
				<Route path="/write" exact component={Write} />
			</Switch>
		</div>
	);
}

export default App;
