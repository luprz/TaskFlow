import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, MailCheck } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { RoutePath } from '../../../types';

export const CheckEmailPage = () => {
  return (
    <Card className="w-full max-w-md shadow-lg border-border/50">
      <CardHeader className="space-y-4 items-center text-center pb-2">
        <div className="flex items-center gap-2 font-bold text-2xl">
          <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
            <LayoutGrid size={20} />
          </div>
          <span>TaskFlow</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center space-y-6 pt-4">
        <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center">
          <MailCheck size={40} className="text-primary" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Check your email</h2>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">
            We have sent a password recovery link to <span className="font-medium text-foreground">m@example.com</span>
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          Don't see it? Check your spam folder.
        </p>

        <div className="w-full space-y-6 mt-4">
            <Link to={RoutePath.RESET_PASSWORD}>
                <Button className="w-full">
                    Back to Login
                </Button>
            </Link>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Didn't receive the email? </span>
            <button className="text-primary hover:underline font-medium">
              Click to resend
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};