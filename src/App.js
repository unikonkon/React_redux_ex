import Home from './component/Home';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Page2 from './component/page2';

function App() {
  return (
    <div className="App">
      {/* กำหนด store เพื่อเข้าถึงข้อมูล */}
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/page2" element={<Page2/>}/>
        </Routes>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
