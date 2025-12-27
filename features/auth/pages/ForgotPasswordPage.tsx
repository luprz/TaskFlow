import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutGrid, ArrowLeft } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { RoutePath } from '../../../types';

export const ForgotPasswordPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(RoutePath.CHECK_EMAIL);
    }

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
            <CardTitle>Recuperar contraseña</CardTitle>
            <CardDescription>
            Introduce tu correo electrónico para recibir un enlace de recuperación
            </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Correo electrónico</label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <Button type="submit" className="w-full">
            Enviar enlace de recuperación
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <Link to={RoutePath.LOGIN} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver al inicio de sesión
        </Link>
      </CardFooter>
    </Card>
  );
};