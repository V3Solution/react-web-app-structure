import { BrowserRouter, Routes,Route } from "react-router-dom";
import {AppRoutes} from './Routes/AppRoutes'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<AppRoutes/>} />
        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;
