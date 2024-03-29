import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskFormPage from "./elements/TaskFormPage.jsx";
import Tasks from "./elements/Tasks.jsx";
function App() {
  return (
    <BrowserRouter>
    <Routes >
      {/* <Route path="/" element={<h1>tasks</h1>}/> */}
      <Route path="/" element={<Tasks />}/>
      <Route path="/add-task" element={<TaskFormPage />}/>
      <Route path="/del-task" element={<h1>del-task</h1>}/>
      <Route path="/edit-task" element={<h1>edit-task</h1>}/>
      <Route path="/tasks/:id" element={<h1>detail-task</h1>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
