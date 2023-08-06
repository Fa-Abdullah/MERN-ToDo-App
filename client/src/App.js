// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import React from 'react';
// import Main from './components/main.jsx'
// // import UserData from './components/userData.jsx';
// import Login from './components/login.jsx';
// import Signup from './components/signup.jsx';

// function App() {
//   return (

//       <React.Fragment>
//         <BrowserRouter>
//           <Routes>
//             <Route path='/home' element={<Main/>}/>
//             <Route path="/" element={<Navigate replace to="/login" />} />
//             {/* <Route path='/userData' element={<UserData/>}/> */}
//             <Route path='/login' element={<Login/>}/>
//             <Route path='/create1' element={<Signup/>}/>
//           </Routes>
//         </BrowserRouter>
//       </React.Fragment>

//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import TaskList from "./components/userData.jsx";

function App() {
  

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Main />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create1' element={<Signup />} />
          <Route path="/update" element={<TaskList/>}/>
          
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;