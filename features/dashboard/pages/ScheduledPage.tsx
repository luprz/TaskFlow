import React from 'react';
import { 
    ClipboardList, 
    Video, 
    BarChart, 
    Bug,
    UserPlus,
    Calendar
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';

const activities = [
    {
        date: '27 dic, 2025',
        items: [
            {
                title: 'Revisión de contrato anual',
                assignee: 'Maria Gonzalez',
                color: 'bg-green-500',
                icon: <ClipboardList className="text-blue-600" size={20} />,
                iconBg: 'bg-blue-100',
            },
            {
                title: 'Sincronización con equipo de diseño',
                assignee: 'Juan Perez',
                color: 'bg-yellow-500',
                icon: <Video className="text-purple-600" size={20} />,
                iconBg: 'bg-purple-100',
            },
            {
                title: 'Actualización de métricas mensuales',
                assignee: 'Ana Lopez',
                color: 'bg-gray-400',
                icon: <BarChart className="text-orange-600" size={20} />,
                iconBg: 'bg-orange-100',
            }
        ]
    },
    {
        date: '26 dic, 2025',
        items: [
             {
                title: 'Testing de nueva funcionalidad',
                assignee: 'Roberto Martinez',
                color: 'bg-red-500',
                icon: <Bug className="text-emerald-600" size={20} />,
                iconBg: 'bg-emerald-100',
            }
        ]
    }
]

export const ScheduledPage = () => {
    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8">
             <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold tracking-tight">Agendadas</h2>
            </div>
            
            {activities.map((group, idx) => (
                <section key={idx}>
                     <h2 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                        <Calendar size={16} />
                        {group.date}
                    </h2>
                    <div className="space-y-3">
                        {group.items.map((item, itemIdx) => (
                            <Card key={itemIdx} className="group flex items-center justify-between p-4 hover:border-primary/50 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${item.iconBg}`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{item.title}</h3>
                                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                                                Asignado a: <span className="font-medium text-foreground">{item.assignee}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                     <Button variant="outline" size="sm" className="hidden group-hover:flex">
                                        Ver detalles
                                     </Button>
                                     <Button variant="ghost" size="sm" className="gap-1">
                                        <UserPlus size={16} /> Reasignar
                                     </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};