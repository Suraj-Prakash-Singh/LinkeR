import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage';


function AppLayout(){
  return (
    <div className='w-screen h-screen bg-[#0B101B]'>
      <MainPage/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)
