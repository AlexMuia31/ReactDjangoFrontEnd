import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PostLoading from './components/PostLoading';
import Posts from './components/Posts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PostLoading />
      <Posts />
      <Footer />

    </div>
  );
}

export default App;
