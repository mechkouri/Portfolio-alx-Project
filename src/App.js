import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";

// Main App Component: Sets up routing and renders the main structure of the app
function App() {
  return (
    <>
      {/* Router provides routing functionality to the application */}
      <Router>
        {/* Header component displayed on all pages */}
        <Header />
        
        {/* Switch renders the first matching route */}
        <Switch>
          {/* Route definitions for different pages */}
          <Route path="/" exact component={Home} /> {/* Home page route */}
          <Route path="/about" exact component={About} /> {/* About page route */}
          <Route path="/courses" exact component={CourseHome} /> {/* Courses page route */}
          <Route path="/team" exact component={Team} /> {/* Team page route */}
          <Route path="/pricing" exact component={Pricing} /> {/* Pricing page route */}
          <Route path="/journal" exact component={Blog} /> {/* Blog page route (renamed from "journal" to "blog") */}
          <Route path="/contact" exact component={Contact} /> {/* Contact page route */}
        </Switch>
        
        {/* Footer component displayed on all pages */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
