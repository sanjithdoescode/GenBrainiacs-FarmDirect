# FarmDirect

FarmDirect is a digital platform designed to connect farmers in Tamil Nadu directly with consumers, eliminating middlemen to provide better income for farmers and fresher, potentially lower-priced produce for consumers. The platform aims to create a transparent supply chain and foster community connections between farmers and consumers.

## Table of Contents

- [Project Purpose](#project-purpose)
- [Technology Stack](#technology-stack)
- [Data Models](#data-models)
- [User Interface](#user-interface)
- [Unique Selling Points](#unique-selling-points)
- [Project Scope](#project-scope)
- [Core Features](#core-features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Purpose

FarmDirect aims to create a transparent supply chain and foster community connections between farmers and consumers.

## Technology Stack

- **Frontend**: Next.js (React framework), TypeScript/JavaScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API routes (serverless Node.js functions)
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication
- **UI Libraries**: React Icons, Next Themes 

## Data Models

1. **User**: Basic user information, authentication, addresses, and role management
2. **FarmerProfile**: Detailed farmer information, farm details, certifications, ratings
3. **ConsumerProfile**: Consumer preferences, saved addresses, favorite products/farmers
4. **Product**: Comprehensive product details including nutritional info, seasonality, availability
5. **Order**: Order processing, payment tracking, delivery management
6. **CropAdoption**: Community feature allowing consumers to adopt crops
7. **ForumPost**: Community discussion forum posts
8. **Comment**: Comments on forum posts

## User Interface

- Modern, clean design using Tailwind CSS
- Responsive layout for different devices
- Interactive components with animations using Framer Motion
- Multilingual interface
- Focus on simplicity for accessibility to both farmers and consumers

## Unique Selling Points

1. **Direct Farmer-Consumer Connection**: Eliminates middlemen for better prices and fresher produce
2. **Product Traceability**: Consumers can track the journey of their food from farm to table
3. **Community Building**: Various features to strengthen the relationship between farmers and consumers
4. **Sustainability Focus**: Carbon footprint tracking, organic certifications, and sustainable farming practices

## Project Scope

- Web application
- Android application planned (mentioned in the requirements)
- Dual interfaces for farmers and consumers

## Core Features

### 1. User Management

- Multi-role user system (farmers, consumers, admins)
- Separate profiles for farmers and consumers
- Authentication with JWT tokens
- Multilingual support (English and Tamil)

### 2. Marketplace

- Product listings with detailed information (description, price, unit, quantity, organic status)
- Product search, filtering, and sorting
- Shopping cart functionality
- Ordering system with different payment methods
- Product ratings and reviews

### 3. Farmer Features

- Detailed farmer profiles with farm information, certifications, and specialties
- Product management system for farmers to list their produce
- Order management for farmers to track and fulfill orders
- Ratings and feedback system

### 4. Consumer Features

- Saved addresses for delivery
- Favorite products and farmers
- Purchase history
- Preference settings for notifications

### 5. Product Traceability

- Supply chain journey tracking from farm to consumer
- Information on farming practices
- Carbon footprint estimation
- QR code verification system for products

### 6. Community Features

- Crop adoption program (consumers can adopt crops and follow their growth)
- Community voting (consumers can influence what farmers grow)
- Community Supported Agriculture (CSA) programs
- Harvest day events and farm tours
- Discussion forum for knowledge sharing and community building

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd FarmDirect
npm install
```

## Usage

To run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
