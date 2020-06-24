import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import ViewRecipePage from './pages/ViewRecipePage';
import AddRecipePage from './pages/AddRecipePage';
import AboutPage from './pages/AboutPage';


class RouteComponents extends React.PureComponent{
    render(){
        return(
            <>
             <Router>
                 <Switch>
                     <Route exact path="/" component={HomePage}></Route>
                     <Route path="/ViewRecipe" ><ViewRecipePage /></Route>
                     <Route path="/AddRecipe" component={AddRecipePage}></Route>
                     <Route path="/About" component={AboutPage}></Route>
                     <Route path="/Contact" component={ContactPage}></Route>
                 </Switch>
             </Router>
            </>
        )
    }
}
ReactDOM.render(<RouteComponents />,document.getElementById('root'));