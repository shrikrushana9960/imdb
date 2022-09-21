import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Movies from './components/Movies';
import styles from "./components/imdb.module.css"
import AddForm from './components/AddForm';
function App() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.sub_container}>
          <h2 className='title'>My Movies</h2>
        <Movies/></div>
        <div className={styles.sub_container}>
        <h2 className='title'>Movie Form</h2>
        <AddForm/></div>
        
      </div>
      
    </Provider>
  );
}

export default App;
