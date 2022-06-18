// eslint-disable-next-line object-curly-newline
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
      <HashRouter basename={process.env.PUBLIC_URL}>
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
