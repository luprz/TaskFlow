import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, Github } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { RoutePath } from '../../../types';

export const RegisterPage = () => {
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
          <CardTitle>Crear una cuenta</CardTitle>
          <CardDescription>
            Introduce tu correo electrónico a continuación para crear tu cuenta
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Correo electrónico</label>
            <Input type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Contraseña</label>
            <Input type="password" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Confirmar Contraseña</label>
            <Input type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Registrarse con Email
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              O continuar con
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full gap-2">
            <Github size={16} /> Github
          </Button>
          <Button variant="outline" className="w-full gap-2">
             {/* Google Icon SVG */}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
               <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
             Google
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Al hacer clic en continuar, aceptas nuestros{' '}
          <Link to="#" className="text-primary hover:underline">
            Términos de servicio
          </Link>{' '}
          y{' '}
          <Link to="#" className="text-primary hover:underline">
            Política de privacidad
          </Link>
          .
        </div>
      </CardContent>
    </Card>
  );
};