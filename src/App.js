import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Landingpage from './components/landingpage'
import Adminlogin from './components/admin-login'
import Userlogin from './components/user-login'
import Adminhome from './components/adminhome';
import UserHome from './components/userhome';
import Error from './components/error';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/admin-login' element={<Adminlogin />}/>
          <Route path='/user-login' element={<Userlogin />}/>
          <Route path='/admin/*' element={<Adminhome />}/>
          <Route path='/user/*' element={<UserHome />}/>
          <Route path='*' element={<Error />}/>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
