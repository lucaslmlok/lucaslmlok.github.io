import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="antialiased">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <main>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<TermsAndConditionsPage />} />
            <Route path="/project" element={<ProjectDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
