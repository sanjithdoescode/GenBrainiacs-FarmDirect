# FarmDirect

FarmDirect is a digital platform revolutionizing local agriculture by directly connecting farmers in Tamil Nadu with consumers. By eliminating middlemen, we empower farmers with better income while providing consumers with fresher, more affordable produce. Beyond just a marketplace, FarmDirect creates a transparent supply chain and fosters meaningful community connections between food producers and consumers.

[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## 📋 Table of Contents

- [Overview](#-overview)
- [Problem & Solution](#-problem--solution)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Data Models](#-data-models)
- [API Routes](#-api-routes)
- [Advanced AI Features](#-advanced-ai-features)
- [User Interfaces](#-user-interfaces)
- [Impact & Benefits](#-impact--benefits)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

## 🌱 Overview

FarmDirect transcends the concept of being "just another marketplace" for farm produce. While marketplace functionality serves as a foundation, our platform's true innovation lies in creating a comprehensive ecosystem that transforms the relationship between food producers and consumers:

- Creating meaningful connections between farmers and consumers
- Building a vibrant community around sustainable food systems
- Integrating educational resources on sustainable farming and eating
- Enabling collaborative growth models rather than competition

## 🚜 Problem & Solution

### The Problem We're Addressing

The traditional agricultural supply chain involves multiple intermediaries between farmers and consumers, creating several problems:

- Farmers receive only a fraction of the final retail price
- Consumers pay inflated prices for products that may no longer be fresh
- Lack of transparency in food sourcing and production methods 
- Increased carbon footprint due to lengthy distribution chains
- Limited market access for small-scale local farmers

### Our Solution

FarmDirect creates a direct marketplace that:

1. Provides a streamlined platform for farmers to list their fresh produce
2. Offers an intuitive interface for consumers to purchase directly from local farmers
3. Implements a fast delivery system ensuring produce reaches consumers within 24 hours of harvest
4. Delivers complete transparency through product traceability features
5. Builds community features fostering meaningful relationships between producers and consumers

## 🌟 Key Features

### For Farmers
- **Comprehensive Dashboard** for listing products, managing inventory, and tracking orders
- **Direct Price Control** - set your own prices without middleman markup
- **Customer Insights** - gain valuable data on preferences and buying patterns
- **Brand Building** - create a direct relationship with your customers
- **Streamlined Order Management** - easily track and fulfill orders

### For Consumers
- **Fresh Produce Marketplace** - browse and purchase directly from local farmers
- **Transparent Supply Chain** - see exactly where your food comes from
- **24-Hour Farm-to-Table** - receive ultra-fresh produce within 24 hours of harvest
- **Cost Savings** - up to 30% lower prices than traditional retail
- **Community Connection** - build relationships with the people who grow your food

### Community Features
- **Crop Adoption Program** - adopt specific crops and follow their growth journey
- **Community Supported Agriculture (CSA)** - subscribe to regular deliveries from favorite farmers
- **Knowledge Sharing Forums** - exchange farming tips, recipes, and sustainability practices
- **Farm Visit Events** - connect with farmers through organized farm tours
- **Collaborative Growing Initiatives** - participate in community decision-making on what gets grown

## 💻 Technology Stack

### Frontend
- **Next.js** (v15.2.3) - React framework for server-rendered applications
- **React** (v19.0.0) - UI component library
- **TypeScript** (v5) - Type-safe JavaScript
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework
- **Framer Motion** (v12.5.0) - Animation library
- **React Icons** (v5.0.1) - Icon library
- **Next Themes** (v0.2.1) - Theme management
- **Next-intl** (v3.7.0) - Internationalization

### Backend
- **Next.js API Routes** - Serverless functions for API endpoints
- **MongoDB** (v6.15.0) - NoSQL database
- **Mongoose** (v8.13.0) - MongoDB object modeling
- **JSON Web Tokens** (v9.0.2) - Authentication
- **bcryptjs** (v3.0.2) - Password hashing

### Development Tools
- **ESLint** (v9) - Code linting
- **Jest** (v29.7.0) - Testing framework
- **Turbopack** - Fast bundling via Next.js

## 🏗 Architecture

FarmDirect follows a modern Next.js architecture:

- **App Router** - Uses the latest Next.js App Router for file-system based routing
- **Server Components** - Leverages React Server Components for improved performance
- **API Routes** - Implements serverless functions for backend logic
- **MongoDB Integration** - Uses Mongoose for data modeling and database interactions
- **Authentication System** - JWT-based authentication with secure HTTP-only cookies
- **Internationalization** - Multi-language support with next-intl
- **Theme System** - Light/dark mode support with next-themes

## 📁 Project Structure

```
FarmDirect/
├── app/                   # Main application code (Next.js App Router)
│   ├── about/             # About page
│   ├── api/               # API routes and backend logic
│   ├── community/         # Community features
│   ├── components/        # Shared UI components
│   ├── consumer/          # Consumer-specific pages
│   ├── context/           # React context providers
│   ├── dashboard/         # User dashboards
│   ├── farmer/            # Farmer-specific pages
│   ├── trace/             # Product traceability features
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   └── translations.js    # Internationalization strings
├── public/                # Static assets
├── tests/                 # Test files
├── .env                   # Environment variables
├── .gitignore             # Git ignore file
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn
- MongoDB instance (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GenBrainiacs/FarmDirect.git
   cd FarmDirect
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 📊 Data Models

FarmDirect uses the following core data models:

1. **User**
   - Basic user information, authentication
   - Role management (farmer, consumer, admin)
   - Common profile fields shared across user types

2. **FarmerProfile**
   - Detailed farmer information
   - Farm details and location
   - Certifications and farming practices
   - Rating and review aggregation

3. **ConsumerProfile**
   - Consumer preferences
   - Saved addresses
   - Favorite products and farmers
   - Dietary preferences

4. **Product**
   - Comprehensive product details
   - Pricing and availability
   - Nutritional information
   - Seasonality data
   - Traceability information

5. **Order**
   - Order processing workflow
   - Payment tracking
   - Delivery management
   - Order history

6. **CropAdoption**
   - Community feature for crop adoption
   - Growth tracking
   - Updates and notifications
   - Supporter information

7. **ForumPost** & **Comment**
   - Community discussion system
   - Knowledge sharing
   - Q&A functionality

## 🔄 API Routes

FarmDirect implements RESTful API routes for all core functionality:

- `/api/auth/*` - Authentication endpoints
- `/api/users/*` - User management endpoints
- `/api/farmers/*` - Farmer-specific endpoints
- `/api/consumers/*` - Consumer-specific endpoints
- `/api/products/*` - Product management endpoints
- `/api/orders/*` - Order processing endpoints
- `/api/community/*` - Community feature endpoints

## 🤖 Advanced AI Features

FarmDirect plans to integrate the following AI features powered by Gemini API:

- **Image-Based Plant Identification** - Upload pictures to identify plant species
- **Intelligent Recommendations** - Personalized product suggestions based on preferences
- **AI-Powered Chatbot** - Virtual assistant for farming and food questions
- **Quality Assurance** - Image analysis for produce freshness verification
- **Forecasting & Inventory Insights** - AI-driven demand prediction and inventory management

## 📱 User Interfaces

FarmDirect offers specialized interfaces for different user roles:

### Farmer Dashboard
- Product management
- Order fulfillment
- Inventory tracking
- Performance analytics
- Customer relationship tools

### Consumer Interface
- Product discovery and search
- Shopping cart and checkout
- Order tracking
- Farmer connections
- Community participation

### Community Hub
- Discussion forums
- Event calendar
- Knowledge base
- Crop adoption program
- Collaborative initiatives

## 🌍 Impact & Benefits

### For Farmers
- Up to 40% higher profits by eliminating middlemen
- Direct access to a broader consumer base
- Complete control over pricing and brand presentation
- Direct feedback and insights on customer preferences
- Streamlined operations for listing products and managing orders

### For Consumers
- Ultra-fresh produce harvested within 24 hours
- Up to 30% lower prices for high-quality local produce
- Complete transparency about product origins and farming methods
- Higher nutritional value from fresher products
- Meaningful connections with the people who grow your food

### Environmental Impact
- Reduced carbon footprint through shorter supply chains
- Support for sustainable farming practices
- Reduced food waste through efficient distribution
- Strengthened local agricultural ecosystems

## 🛣️ Roadmap

### Current Version
- Core marketplace functionality
- Basic farmer and consumer profiles
- Product listing and ordering system
- Simple community features

### Coming Soon
- Mobile application for Android and iOS
- Enhanced traceability features with QR codes
- Advanced community features
- Integration with sustainable delivery networks
- Advanced AI features powered by Gemini API

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

FarmDirect - Connecting farmers and consumers for a sustainable future.
