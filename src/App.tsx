import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CompanyForm from './pages/CompanyForm';
import HRForm from './pages/HRForm';
import KPIForm from './pages/KPIForm';
import FinancialForm from './pages/FinancialForm';
import Reports from './pages/Reports';
import Companies from './pages/Companies';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 lg:ml-64 pt-16">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/company-form" element={<CompanyForm />} />
              <Route path="/hr-form" element={<HRForm />} />
              <Route path="/kpi-form" element={<KPIForm />} />
              <Route path="/financial-form" element={<FinancialForm />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;