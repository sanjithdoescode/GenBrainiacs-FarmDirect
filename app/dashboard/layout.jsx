'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 