# Replit Project Guide

## Overview

Vetrivel Traders Corporate Solutions website - A complete React-based corporate website showcasing end-to-end business solutions. Successfully migrated from Replit Agent to standard Replit environment with enhanced features including product carousel, detailed product modals, custom SVG graphics, and professional branding.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

- ✅ **Migration Completed**: Successfully migrated from Replit Agent to Replit with all dependencies installed
- ✅ **Product Images**: Created custom SVG illustrations for all 6 product categories based on detailed brochure specifications
- ✅ **Homepage Carousel**: Implemented auto-advancing carousel with product showcases, navigation arrows, and indicators
- ✅ **Logo Integration**: Added company logo SVG with fallback to gradient VT branding
- ✅ **Enhanced Navigation**: Updated header with improved mobile menu and proper button functionality
- ✅ **Product Details**: Added comprehensive product modal with detailed specifications from brochure
- ✅ **Color Scheme**: Updated website with blue-to-emerald gradient branding throughout all components
- ✅ **Responsive Design**: Enhanced mobile-first responsive design with improved hover states and transitions

## System Architecture

### Frontend Architecture
- **Framework**: React 19.1.1 with Create React App
- **State Management**: React hooks (useState) for modal management and component state
- **Styling**: Tailwind CSS with custom gradient utilities and hover animations
- **Build System**: React Scripts with webpack bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js or similar framework
- **API Design**: RESTful API with potential GraphQL integration for complex data fetching
- **Middleware**: Authentication, CORS, request logging, and error handling
- **File Structure**: Modular approach with separate routes, controllers, and services

## Key Components

### Database Layer
- **ORM/Query Builder**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL for production reliability and feature set
- **Migrations**: Version-controlled schema changes through Drizzle migrations
- **Connection Management**: Connection pooling for optimal performance

### Authentication & Authorization
- **Strategy**: JWT-based authentication with refresh token rotation
- **Session Management**: Stateless token-based approach
- **User Management**: Role-based access control (RBAC) system
- **Security**: Password hashing, rate limiting, and input validation

### API Structure
- **Endpoints**: RESTful resource-based URLs
- **Response Format**: Consistent JSON structure with proper HTTP status codes
- **Error Handling**: Centralized error handling with meaningful error messages
- **Documentation**: API documentation using OpenAPI/Swagger specification

## Data Flow

1. **Client Requests**: Frontend applications send HTTP requests to backend API endpoints
2. **Authentication**: Middleware validates JWT tokens and user permissions
3. **Business Logic**: Controllers process requests and interact with service layer
4. **Database Operations**: Services use Drizzle ORM to perform database queries
5. **Response**: Structured JSON responses sent back to client applications

## External Dependencies

### Core Dependencies
- **Runtime**: Node.js (latest LTS version)
- **Database**: PostgreSQL for data persistence
- **ORM**: Drizzle ORM for database operations
- **HTTP Framework**: Express.js or Fastify for API server

### Development Dependencies
- **TypeScript**: For type safety and better developer experience
- **Testing**: Jest or Vitest for unit and integration testing
- **Linting**: ESLint with Prettier for code formatting
- **Environment Management**: dotenv for configuration management

### Potential Third-party Services
- **File Storage**: Cloud storage solution (AWS S3, Cloudinary) if file uploads are needed
- **Email Service**: Transactional email provider (SendGrid, Mailgun) for notifications
- **Monitoring**: Application performance monitoring (optional)

## Deployment Strategy

### Development Environment
- **Local Setup**: Docker Compose for consistent development environment
- **Database**: Local PostgreSQL instance or Docker container
- **Environment Variables**: Local .env files for configuration

### Production Deployment
- **Platform**: Replit hosting or cloud platform (Railway, Render, Vercel)
- **Database**: Managed PostgreSQL service
- **Environment Configuration**: Platform-specific environment variable management
- **CI/CD**: Automated deployment on code changes
- **Monitoring**: Basic application health checks and error tracking

### Database Management
- **Migrations**: Run automatically on deployment
- **Backups**: Regular automated backups of production data
- **Scaling**: Connection pooling and read replicas if needed

## Development Guidelines

### Code Organization
- **Modular Structure**: Separate concerns into distinct modules
- **Type Safety**: Comprehensive TypeScript usage
- **Error Handling**: Consistent error handling patterns
- **Testing**: Unit tests for business logic, integration tests for API endpoints

### Performance Considerations
- **Database Queries**: Efficient queries with proper indexing
- **Caching**: Redis or in-memory caching for frequently accessed data
- **API Response**: Pagination for large datasets
- **Asset Optimization**: Compressed and optimized static assets

This guide will be updated as the project develops and specific architectural decisions are made based on actual requirements and implementation details.