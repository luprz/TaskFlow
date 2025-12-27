import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { RoutePath } from '../../../types';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(RoutePath.DASHBOARD);
  };

  return (
    <Card className="w-full max-w-md shadow-lg border-border/50">
      <CardHeader className="space-y-4 items-center text-center">
        <div className="flex items-center gap-2 font-bold text-2xl">
          <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
            <LayoutGrid size={20} />
          </div>
          <span>TaskFlow</span>
        </div>
        <div className="space-y-2">
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>
            Introduce tu correo electrónico y contraseña para acceder a tu cuenta.
            </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Correo electrónico
            </label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Contraseña
            </label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          <Button type="submit" className="w-full">
            Iniciar Sesión
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 text-center text-sm">
        <Link to={RoutePath.FORGOT_PASSWORD} className="text-primary hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
        <div className="text-muted-foreground">
          ¿No tienes una cuenta?{' '}
          <Link to={RoutePath.REGISTER} className="text-primary hover:underline font-medium">
            Crear Cuenta
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};