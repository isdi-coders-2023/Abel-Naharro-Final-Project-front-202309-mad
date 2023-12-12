import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/home'));
const LoginPage = lazy(() => import('../pages/login/login'));
const RegisterPage = lazy(() => import('../pages/register/register'));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/sign-in" element={<LoginPage></LoginPage>}></Route>
        <Route path="/sign-up" element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
    </Suspense>
  );
}
