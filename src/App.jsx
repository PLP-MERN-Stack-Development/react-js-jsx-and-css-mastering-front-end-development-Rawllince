import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TaskManagerPage from './pages/TaskManagerPage'
import ApiDataPage from "./pages/apiData"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManagerPage />} />
          <Route path="/api-data" element={<ApiDataPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App