import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/home'));
const LoginPage = lazy(() => import('../pages/login/login'));
const RegisterPage = lazy(() => import('../pages/register/register'));
const CreateOfferPage = lazy(() => import('../pages/create/create'));
const OfferPage = lazy(() => import('../pages/details/details'));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/sign-in" element={<LoginPage></LoginPage>}></Route>
        <Route path="/sign-up" element={<RegisterPage></RegisterPage>}></Route>
        <Route
          path="/share"
          element={<CreateOfferPage></CreateOfferPage>}
        ></Route>
        <Route path="/offer/:id" element={<OfferPage></OfferPage>}></Route>
      </Routes>
    </Suspense>
  );
}
