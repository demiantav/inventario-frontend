import LoginPage from '../features/login/pages/LoginPage';
import AppLayout from '../layouts/AppLayout';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/main" element={<AppLayout></AppLayout>}></Route>
      </Routes>
    </>
  );
}

export default App;
