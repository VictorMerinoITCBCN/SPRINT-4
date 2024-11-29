import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AssistanceTable } from "./components/AssistanceTable"
import "./App.css"
import { RegisterUser } from "./pages/RegisterUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/assistance/subject/:id" element={<AssistanceTable />}/>
        <Route path="/register/student" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
