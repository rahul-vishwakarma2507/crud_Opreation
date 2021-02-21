import './App.css';
import FormField from './FormField';
import Header from './Header';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListFromDb from './ListFromDb';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Search/>
      <ListFromDb/>
     <FormField/>
     <Footer/>
    </div>
  );
}

export default App;
