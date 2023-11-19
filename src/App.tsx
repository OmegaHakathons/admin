import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { View } from './pages/view';

import { Sidebar } from './pages/sideBar';

function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center p-4 border-b-4 bg-white">Админка</div>
      <div className="flex gap-16 h-full p-4 mx-auto">
        <Sidebar/>
        <div className='w-[calc(80%-1rem)]'>
          <Routes>
            <Route path="/" element={<View/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
