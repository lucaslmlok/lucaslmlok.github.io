import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import AnimationLayout from './components/AnimatedLayout';
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <main className="overflow-x-hidden">
          <Routes>
            <Route element={<AnimationLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/terms" element={<TermsAndConditionsPage />} />
              <Route
                path="/project/:project"
                element={<ProjectDetailsPage />}
              />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
