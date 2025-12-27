import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, ArrowLeft } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { RoutePath } from '../../../types';

export const ResetPasswordPage = () => {
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
            <CardTitle>Crear nueva contraseña</CardTitle>
            <CardDescription>
            Ingresa tu nueva contraseña a continuación.
            </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nueva contraseña</label>
            <Input type="password" placeholder="••••••••" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Confirmar contraseña</label>
            <Input type="password" placeholder="••••••••" required />
          </div>
          <Button type="submit" className="w-full">
            Restablecer contraseña
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <Link to={RoutePath.LOGIN} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={16} />
          Volver al inicio de sesión
        </Link>
      </CardFooter>
    </Card>
  );
};