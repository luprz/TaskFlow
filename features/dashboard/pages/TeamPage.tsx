import React, { useState } from 'react';
import { UserPlus, Edit2, Trash2, X } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Card } from '../../../components/ui/card';
import { TeamMember } from '../../../types';

// Mock Data
const initialTeam: TeamMember[] = [
    { id: '1', name: 'Maria Gonzalez', role: 'Gerente', email: 'maria.g@empresa.com', tasks: 12, capacity: 78, initials: 'MG', color: 'blue' },
    { id: '2', name: 'Juan Perez', role: 'Desarrollador', email: 'juan.p@empresa.com', tasks: 8, capacity: 55, initials: 'JP', color: 'purple' },
    { id: '3', name: 'Ana Lopez', role: 'Diseñador UX', email: 'ana.l@empresa.com', tasks: 15, capacity: 90, initials: 'AL', color: 'orange' },
    { id: '4', name: 'Roberto Martinez', role: 'QA Tester', email: 'roberto.m@empresa.com', tasks: 4, capacity: 30, initials: 'RM', color: 'emerald' },
    { id: '5', name: 'Laura Díaz', role: 'Marketing', email: 'laura.d@empresa.com', tasks: 9, capacity: 60, initials: 'LD', color: 'yellow' },
];

// Color Maps
const getColorClass = (color: string) => {
    const map: Record<string, string> = {
        blue: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900',
        purple: 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900',
        orange: 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900',
        emerald: 'text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-900',
        yellow: 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900',
    };
    return map[color] || map['blue'];
};

const getBarColor = (color: string) => {
     const map: Record<string, string> = {
        blue: '#2563eb',
        purple: '#9333ea',
        orange: '#ea580c',
        emerald: '#059669',
        yellow: '#ca8a04',
    };
    return map[color] || '#2563eb';
}

export const TeamPage = () => {
    const [team, setTeam] = useState<TeamMember[]>(initialTeam);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-6">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold tracking-tight">Panel de Gestión de Equipo</h2>
                <Button onClick={() => setIsModalOpen(true)}>
                    <UserPlus className="mr-2 h-4 w-4" /> Agregar Miembro
                </Button>
            </div>

            <Card className="overflow-hidden">
                <div className="w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[250px]">Nombre y Rol</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Email</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[220px]">Carga de Tareas</th>
                                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[120px]">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {team.map((member) => (
                                <tr key={member.id} className="border-b transition-colors hover:bg-muted/50">
                                    <td className="p-4 align-middle">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${getColorClass(member.color)}`}>
                                                {member.initials}
                                            </div>
                                            <div>
                                                <div className="font-medium">{member.name}</div>
                                                <div className="text-xs text-muted-foreground">{member.role}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 align-middle">{member.email}</td>
                                    <td className="p-4 align-middle">
                                        <div className="w-full max-w-[150px]">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="font-medium">{member.tasks} tareas</span>
                                                <span className="text-muted-foreground">{member.capacity}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full rounded-full" 
                                                    style={{ width: `${member.capacity}%`, backgroundColor: getBarColor(member.color) }} 
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 align-middle text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Edit2 size={16} className="text-muted-foreground" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-red-600 hover:bg-red-50">
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Custom Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-background p-6 rounded-lg shadow-xl w-full max-w-md border animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Agregar Nuevo Miembro</h3>
                            <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
                                <X size={20} />
                            </Button>
                        </div>
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Nombre</label>
                                <Input placeholder="Nombre completo" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input type="email" placeholder="email@empresa.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Rol</label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                    <option value="">Seleccionar rol</option>
                                    <option value="Gerente">Gerente</option>
                                    <option value="Desarrollador">Desarrollador</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-3 pt-2">
                                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
                                <Button type="submit">Guardar</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};