import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage';
import LoggedIn from './LoggedInPage/LoggedIn';


function AppLayout(){
  return (
    <div className='w-screen h-max bg-[#0B101B]'>
      <LoggedIn/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)
