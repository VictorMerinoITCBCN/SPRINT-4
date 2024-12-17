import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import { RegisterUser } from "./pages/RegisterUser";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserInfo } from "./pages/UserInfo";
import { NotAllowed } from "./pages/NotAllowed";
import { SchedulePage } from "./pages/Schedule"
import { AssistancePage } from "./pages/Assistance";
import { SubjectListPage } from "./pages/SubjectListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="/register/:role" element={<RegisterUser />} />
        <Route path="/assistances" element={<SubjectListPage />} />
        <Route path="/assistance/subject/:id" element={<AssistancePage />}/>
        <Route path="/not-allowed" element={<NotAllowed />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
