export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  tasks: number;
  capacity: number;
  initials: string;
  color: string; // Tailwinc color class prefix e.g. 'blue'
}

export interface StatCardProps {
  title: string;
  value: string;
  trend: number;
  trendLabel: string;
  icon: React.ReactNode;
}

export interface Activity {
  id: string;
  title: string;
  assignedTo: string;
  date: string;
  type: 'contract' | 'sync' | 'metrics' | 'testing';
  color: string; // hex for dot
}

export enum RoutePath {
  LOGIN = '/',
  REGISTER = '/register',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD = '/reset-password',
  CHECK_EMAIL = '/check-email',
  DASHBOARD = '/dashboard',
  DASHBOARD_TEAM = '/dashboard/team',
  DASHBOARD_SCHEDULED = '/dashboard/scheduled'
}