import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutGrid, 
  CalendarDays, 
  Inbox, 
  Users, 
  BarChart3, 
  Search, 
  Bell, 
  ChevronDown, 
  LogOut, 
  Settings, 
  CreditCard 
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { RoutePath } from '../../types';

export const DashboardLayout = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(RoutePath.LOGIN);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/5 flex flex-col h-full transition-all">
        <div className="h-16 flex items-center px-6 border-b bg-background/50">
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="h-6 w-6 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
              <LayoutGrid size={14} />
            </div>
            <span>TaskFlow</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <div className="text-xs font-medium text-muted-foreground px-2 mb-2 uppercase tracking-wider">
            Opciones
          </div>
          
          <NavLink 
            to={RoutePath.DASHBOARD_SCHEDULED}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
              isActive 
                ? "bg-secondary text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <CalendarDays size={18} />
            Agendadas
          </NavLink>

          <NavLink 
            to="/dashboard/pending" 
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
              isActive 
                ? "bg-secondary text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <Inbox size={18} />
            Pendientes
          </NavLink>

          <NavLink 
            to={RoutePath.DASHBOARD_TEAM}
             className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
              isActive 
                ? "bg-secondary text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <Users size={18} />
            Equipo
          </NavLink>

          <NavLink 
             to={RoutePath.DASHBOARD}
             end
             className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
              isActive 
                ? "bg-secondary text-foreground" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <BarChart3 size={18} />
            Reportes
          </NavLink>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t relative">
          <button 
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center w-full gap-3 p-2 rounded-md hover:bg-secondary transition-colors text-left"
          >
            <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border">
              <img 
                src="https://picsum.photos/200" 
                alt="User" 
                className="h-full w-full object-cover" 
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Carlos Diaz</p>
              <p className="text-xs text-muted-foreground truncate">carlos@empresa.com</p>
            </div>
            <ChevronDown size={16} className="text-muted-foreground" />
          </button>

          {/* User Dropdown */}
          {userMenuOpen && (
            <div className="absolute bottom-full left-4 right-4 mb-2 bg-popover border rounded-lg shadow-lg py-1 z-50">
              <div className="px-3 py-2 border-b mb-1">
                <p className="text-sm font-medium">Mi Cuenta</p>
              </div>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary text-left">
                <Settings size={16} /> Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary text-left">
                <CreditCard size={16} /> Billing
              </button>
              <div className="my-1 border-t"></div>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-red-50 text-red-600 text-left"
              >
                <LogOut size={16} /> Log out
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background/50">
        <header className="h-16 flex items-center justify-between px-8 border-b sticky top-0 bg-background/60 backdrop-blur-md z-10 transition-all">
          <h1 className="text-lg font-semibold tracking-tight">
             {/* Dynamic Title Logic could go here based on route */}
             TaskFlow Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground">
              <Search size={20} />
            </button>
            <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground">
              <Bell size={20} />
            </button>
          </div>
        </header>
        
        <Outlet />
      </main>
    </div>
  );
};