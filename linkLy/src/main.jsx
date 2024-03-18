import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage';


function AppLayout(){
  return (<MainPage/>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)
