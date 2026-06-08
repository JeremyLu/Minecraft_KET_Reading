import { Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import ExercisesPage from './pages/ExercisesPage';
import GlossaryPage from './pages/GlossaryPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ExercisesPage />} />
        <Route path="glossary" element={<GlossaryPage />} />
      </Route>
    </Routes>
  );
}
