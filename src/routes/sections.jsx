import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import routePath from 'src/configs/routePath';
import DashboardLayout from 'src/layouts/dashboard';

import RequireAuth from 'src/components/requireAuth';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: (
            <RequireAuth>
              <IndexPage />
            </RequireAuth>
          ),
          index: true,
        },
        {
          path: 'user',
          element: (
            <RequireAuth>
              <UserPage />
            </RequireAuth>
          ),
        },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: routePath.LOGIN,
      element: <LoginPage />,
    },
    {
      path: routePath.NOT_FOUND,
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to={routePath.NOT_FOUND} replace />,
    },
  ]);

  return routes;
}
