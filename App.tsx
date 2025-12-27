import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RoutePath } from './types';

// Layouts
import { AuthLayout } from './layouts/AuthLayout';
import { DashboardLayout } from './components/Layout/DashboardLayout';

// Pages
import { LoginPage } from './features/auth/pages/LoginPage';
import { RegisterPage } from './features/auth/pages/RegisterPage';
import { ForgotPasswordPage } from './features/auth/pages/ForgotPasswordPage';
import { CheckEmailPage } from './features/auth/pages/CheckEmailPage';
import { ResetPasswordPage } from './features/auth/pages/ResetPasswordPage';
import { StatsPage } from './features/dashboard/pages/StatsPage';
import { TeamPage } from './features/dashboard/pages/TeamPage';
import { ScheduledPage } from './features/dashboard/pages/ScheduledPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path={RoutePath.LOGIN} element={<LoginPage />} />
          <Route path={RoutePath.REGISTER} element={<RegisterPage />} />
          <Route path={RoutePath.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
          <Route path={RoutePath.CHECK_EMAIL} element={<CheckEmailPage />} />
          <Route path={RoutePath.RESET_PASSWORD} element={<ResetPasswordPage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path={RoutePath.DASHBOARD} element={<DashboardLayout />}>
            <Route index element={<StatsPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="scheduled" element={<ScheduledPage />} />
            {/* Fallback for pending routes in demo */}
            <Route path="*" element={<Navigate to={RoutePath.DASHBOARD} replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;