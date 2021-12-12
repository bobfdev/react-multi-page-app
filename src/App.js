import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/blog/Blog';
import Posts from './components/blog/Posts';
import Post from './components/blog/Post';
import './index.css';

function App() {
  return (
      <>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="" element={<Posts />} />
            <Route path=":postSlug" element={<Post />} />
          </Routes>
          <Footer />
        </Router>
      </>
  );
}

export default App;
