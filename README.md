# TaskFlow - Gestión de Tareas y Rendimiento de Equipo

TaskFlow es una plataforma moderna de gestión de proyectos y seguimiento de rendimiento diseñada para equipos de alto rendimiento.

## 🚀 Características

- **Panel de Estadísticas**: Visualización en tiempo real de métricas, tareas completadas y eficiencia del equipo.
- **Gestión de Equipo**: Vista detallada de los miembros del equipo, sus roles y capacidad actual.
- **Programación de Tareas**: Calendario y lista de actividades programadas.
- **Autenticación**: Sistema completo de Login, Registro y Recuperación de Contraseña (Demo).

## 🛠️ Arquitectura y Tecnologías

El proyecto está construido siguiendo una arquitectura basada en **features** para facilitar la escalabilidad y el mantenimiento.

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: Basados en principios de Radix UI y configurados con **Lucide React** para iconografía.
- **Gráficos**: [Recharts](https://recharts.org/) para visualización dinámica de datos.
- **Enrutamiento**: [React Router Dom](https://reactrouter.com/) con soporte para rutas protegidas y navegación fluida.

### Estructura del Proyecto
- `features/`: Contiene la lógica y páginas divididas por funcionalidades (auth, dashboard).
- `components/`: Componentes de interfaz de usuario (UI) reutilizables y layout principal.
- `layouts/`: Envoltorios para diferentes secciones de la aplicación (Auth vs Dashboard).
- `lib/`: Utilidades compartidas y configuraciones generales.
- `types.ts`: Definiciones de tipos e interfaces de TypeScript.

## 💻 Instalación y Ejecución

Para ejecutar el proyecto localmente, asegúrate de tener instalado [Node.js](https://nodejs.org/).

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```
2.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## 🔑 Acceso para Pruebas (Demo Mode)

Actualmente, la aplicación funciona en modo demostración. Puedes utilizar las siguientes credenciales o cualquier combinación de correo/contraseña para explorar el dashboard:

- **Usuario**: `admin@taskflow.com`
- **Contraseña**: `admin123`

> **Nota**: La autenticación actual es puramente frontend para fines de demostración de la interfaz.

---
Desarrollado para optimizar el flujo de trabajo y la transparencia en equipos ágiles.
