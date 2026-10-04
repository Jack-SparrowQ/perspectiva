import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import { LibraryPage } from "./pages/LibraryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/questionnaire" element={<QuestionPage />} />
      <Route path="/biblioteca" element={<LibraryPage />} />
    </Routes>
  );
}

export default App;
