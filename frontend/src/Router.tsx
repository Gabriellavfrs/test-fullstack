import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ClientRegister } from './pages/ClientRegister';
import { ClientEditor } from './pages/ClientEditor';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<ClientRegister />} />
      <Route path="/:id" element={<ClientEditor />} />
    </Routes>
  );
}
