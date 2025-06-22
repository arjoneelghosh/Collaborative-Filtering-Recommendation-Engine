import React from 'react';
import { Film } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-3">
            <Film className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Mock Recommendation Engine
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;