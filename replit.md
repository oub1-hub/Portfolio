# Overview

This is a full-stack web application built as a personal portfolio website for Fadoua OUBZA, showcasing her work as a Web Designer and AI specialist. The application features a modern, responsive design with interactive elements including particle animations, smooth scrolling navigation, and a comprehensive contact system. The portfolio displays projects, skills, services, and personal information in an engaging single-page application format.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React + TypeScript**: Modern React application using TypeScript for type safety and better development experience
- **Vite Build System**: Fast development server and optimized production builds with hot module replacement
- **Styling Framework**: Tailwind CSS for utility-first styling with custom CSS variables for theming
- **Component Library**: Radix UI components with shadcn/ui for accessible, unstyled UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
- **Express.js Server**: Node.js backend using Express framework for API routes and middleware
- **TypeScript**: Full TypeScript support across server-side code
- **Development Integration**: Vite middleware integration for seamless development experience
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Logging**: Custom request/response logging for API endpoints

## Database & Storage
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Database Schema**: User management with username/password authentication structure
- **Migration System**: Drizzle-kit for database schema migrations
- **In-Memory Storage**: Fallback storage implementation for development/testing
- **Neon Database**: Serverless PostgreSQL database integration

## Development Workflow
- **Monorepo Structure**: Organized with shared schema between client and server
- **Path Aliases**: Configured TypeScript path mapping for clean imports
- **Hot Reload**: Development server with automatic reloading
- **Build Pipeline**: Separate client (Vite) and server (esbuild) build processes
- **Type Checking**: Comprehensive TypeScript configuration across all modules

# External Dependencies

## UI & Styling
- **@radix-ui/**: Complete suite of accessible UI components (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework for responsive design
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Modern icon library for React applications

## Data Management
- **@tanstack/react-query**: Powerful data synchronization for React applications
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation resolver for various schema libraries
- **zod**: TypeScript-first schema validation library

## Database & Backend
- **drizzle-orm**: Lightweight TypeScript ORM for type-safe database operations
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **express**: Fast, minimalist web framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development Tools
- **vite**: Next generation frontend build tool
- **@vitejs/plugin-react**: Official React plugin for Vite
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Extremely fast JavaScript bundler for production builds
- **@replit/vite-plugin-cartographer**: Replit-specific development enhancements