// eslint-disable-next-line object-curly-newline
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './layouts/Header';
import AnimationLayout from './components/AnimatedLayout';
import Spinner from './components/Spinner';

import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./pages/HomePage'));
const Terms = lazy(() => import('./pages/TermsAndConditionsPage'));
const Project = lazy(() => import('./pages/ProjectDetailsPage'));

function App() {
  return (
    <div className="antialiased">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <main className="overflow-x-hidden">
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route element={<AnimationLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/project/:project" element={<Project />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
      </HashRouter>

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
    </div>
  );
}

export default App;
