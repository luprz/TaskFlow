import React from 'react';
import { 
  ClipboardList, 
  CheckCheck, 
  Users, 
  Clock, 
  TrendingUp, 
  TrendingDown,
  Calendar
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  ResponsiveContainer, 
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const weeklyData = [
  { day: 'Lun', val: 65 },
  { day: 'Mar', val: 85 },
  { day: 'Mie', val: 45 },
  { day: 'Jue', val: 90 },
  { day: 'Vie', val: 75 },
  { day: 'Sab', val: 30 },
  { day: 'Dom', val: 20 },
];

const teamLoadData = [
    { name: 'Maria Gonzalez', initials: 'MG', tasks: 12, percent: 78, color: '#2563eb' }, // blue-600
    { name: 'Juan Perez', initials: 'JP', tasks: 8, percent: 55, color: '#9333ea' }, // purple-600
    { name: 'Ana Lopez', initials: 'AL', tasks: 15, percent: 90, color: '#ea580c' }, // orange-600
    { name: 'Roberto Martinez', initials: 'RM', tasks: 4, percent: 30, color: '#059669' }, // emerald-600
];

const productivityData = [
    { month: 'Jul', val: 20 },
    { month: 'Ago', val: 50 },
    { month: 'Sep', val: 40 },
    { month: 'Oct', val: 80 },
    { month: 'Nov', val: 60 },
    { month: 'Dic', val: 100 },
];

export const StatsPage = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Date Filter */}
      <div className="flex justify-between items-end mb-4">
        <div>
            <h2 className="text-2xl font-bold tracking-tight">Estadísticas de Rendimiento</h2>
            <p className="text-sm text-muted-foreground">Monitorea el progreso de tu equipo en tiempo real.</p>
        </div>
        <Button variant="outline" className="gap-2 h-9 border-muted-foreground/20 hover:bg-muted/50 transition-all">
            <Calendar size={14} /> Dic 2025
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Actividades</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground/70" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tighter">142</div>
            <p className="text-xs text-muted-foreground pt-1 flex items-center">
              <span className="text-green-600 font-medium flex items-center mr-1">
                <TrendingUp size={12} className="mr-0.5" /> +20.1%
              </span> 
              vs mes anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tasa de Completado</CardTitle>
            <CheckCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88.5%</div>
            <p className="text-xs text-muted-foreground pt-1 flex items-center">
              <span className="text-green-600 font-medium flex items-center mr-1">
                <TrendingUp size={12} className="mr-0.5" /> +4.5%
              </span> 
              vs mes anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Miembros Activos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground pt-1">
              <span className="text-foreground font-medium">3</span> actualmente en tareas
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pendientes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground pt-1 flex items-center">
              <span className="text-red-500 font-medium flex items-center mr-1">
                <TrendingDown size={12} className="mr-0.5" /> -2
              </span> 
              desde ayer
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Bar Chart */}
        <Card className="col-span-1 lg:col-span-4">
            <CardHeader>
                <CardTitle className="text-lg">Resumen Semanal</CardTitle>
                <CardDescription>Actividades completadas por día de la semana.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={weeklyData}>
                            <XAxis 
                                dataKey="day" 
                                stroke="#888888" 
                                fontSize={12} 
                                tickLine={false} 
                                axisLine={false} 
                            />
                            <Tooltip 
                              cursor={{ fill: 'transparent' }}
                              contentStyle={{ 
                                backgroundColor: 'hsl(var(--popover))', 
                                borderColor: 'hsl(var(--border))', 
                                borderRadius: 'var(--radius)',
                                color: 'hsl(var(--popover-foreground))'
                              }}
                            />
                            <Bar dataKey="val" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

        {/* Team Activity (Progress Bars) */}
        <Card className="col-span-1 lg:col-span-3">
             <CardHeader>
                <CardTitle className="text-lg">Actividad por Asignado</CardTitle>
                <CardDescription>Carga de trabajo actual.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {teamLoadData.map((member) => (
                    <div key={member.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <div 
                                    className="h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold"
                                    style={{ backgroundColor: `${member.color}20`, color: member.color }}
                                >
                                    {member.initials}
                                </div>
                                <span className="font-medium">{member.name}</span>
                            </div>
                            <span className="text-muted-foreground">{member.tasks} tareas</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                            <div 
                                className="h-full rounded-full" 
                                style={{ width: `${member.percent}%`, backgroundColor: member.color }} 
                            />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Donut Chart (CSS Conic) */}
        <Card className="col-span-1 flex flex-col">
            <CardHeader>
                <CardTitle className="text-lg">Distribución de Estados</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center">
                <div className="relative h-48 w-48 mb-6">
                    {/* Simplified Conic Gradient for the Donut Effect */}
                    <div 
                        className="absolute inset-0 rounded-full" 
                        style={{ background: 'conic-gradient(hsl(var(--primary)) 0% 45%, hsl(var(--border)) 45% 70%, hsl(var(--muted-foreground)) 70% 100%)' }}
                    ></div>
                    <div className="absolute inset-4 rounded-full bg-card flex items-center justify-center">
                        <div className="text-center">
                            <span className="text-3xl font-bold block">142</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">Total</span>
                        </div>
                    </div>
                </div>
                <div className="w-full space-y-2 px-4">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-primary rounded-full"></div>Completado</div>
                        <span className="font-medium">45%</span>
                    </div>
                     <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-muted-foreground rounded-full"></div>En Progreso</div>
                        <span className="font-medium">25%</span>
                    </div>
                     <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-border rounded-full"></div>Pendiente</div>
                        <span className="font-medium">30%</span>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Line Chart */}
        <Card className="col-span-1 lg:col-span-2">
             <CardHeader className="flex flex-row justify-between items-center">
                <div>
                    <CardTitle className="text-lg">Productividad (Últimos 6 meses)</CardTitle>
                    <CardDescription>Índice de eficiencia de equipo</CardDescription>
                </div>
                <Button variant="outline" size="sm">Ver reporte</Button>
            </CardHeader>
            <CardContent>
                <div className="w-full h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={productivityData}>
                             <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e4e4e7" />
                            <XAxis 
                                dataKey="month" 
                                stroke="#888888" 
                                fontSize={12} 
                                tickLine={false} 
                                axisLine={false} 
                                padding={{ left: 10, right: 10 }}
                            />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: 'hsl(var(--popover))', 
                                    borderColor: 'hsl(var(--border))', 
                                    borderRadius: 'var(--radius)',
                                    color: 'hsl(var(--popover-foreground))'
                                }}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="val" 
                                stroke="hsl(var(--primary))" 
                                strokeWidth={2} 
                                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }} 
                                activeDot={{ r: 6 }} 
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};