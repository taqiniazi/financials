import React, { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  Filter,
  Calendar,
  Building2,
  TrendingUp,
  Users,
  DollarSign,
  FileSpreadsheet,
  Eye
} from 'lucide-react';
import Chart from '../components/Chart';

const Reports = () => {
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  const [selectedReport, setSelectedReport] = useState('financial');

  const companies = [
    'All Companies',
    'Punjab State Power Corporation',
    'Punjab Transport Corporation',
    'Punjab Water Supply Corporation',
    'Punjab Industrial Development Corporation'
  ];

  const reportTypes = [
    { id: 'financial', label: 'Financial Performance', icon: DollarSign },
    { id: 'hr', label: 'Human Resources', icon: Users },
    { id: 'kpi', label: 'Key Performance Indicators', icon: TrendingUp },
    { id: 'consolidated', label: 'Consolidated Report', icon: BarChart3 }
  ];

  // Sample chart data
  const revenueComparisonData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'PSPC',
        data: [850, 920, 880, 950],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
      {
        label: 'PTC',
        data: [420, 380, 450, 480],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
      {
        label: 'PWSC',
        data: [320, 340, 360, 380],
        backgroundColor: 'rgba(245, 158, 11, 0.8)',
      }
    ]
  };

  const profitMarginData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Profit Margin %',
      data: [12.5, 13.2, 11.8, 14.1, 13.9, 15.2],
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      borderColor: 'rgb(16, 185, 129)',
      borderWidth: 2,
      fill: true
    }]
  };

  const sectorPerformanceData = {
    labels: ['Energy', 'Transport', 'Utilities', 'Manufacturing', 'Finance'],
    datasets: [{
      data: [35, 20, 15, 20, 10],
      backgroundColor: [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444',
        '#8B5CF6'
      ]
    }]
  };

  const reportItems = [
    {
      title: 'Quarterly Financial Summary',
      description: 'Comprehensive financial performance across all companies',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024-01-15',
      status: 'ready'
    },
    {
      title: 'HR Analytics Dashboard',
      description: 'Employee metrics and workforce analysis',
      type: 'Excel',
      size: '1.8 MB',
      date: '2024-01-14',
      status: 'ready'
    },
    {
      title: 'KPI Performance Report',
      description: 'Key performance indicators and benchmarking',
      type: 'PDF',
      size: '3.1 MB',
      date: '2024-01-13',
      status: 'processing'
    },
    {
      title: 'Consolidated Annual Report',
      description: 'Complete annual overview of all state enterprises',
      type: 'PDF',
      size: '5.2 MB',
      date: '2024-01-10',
      status: 'ready'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Generate comprehensive business intelligence reports</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900">Report Filters</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {companies.map((company, index) => (
                <option key={index} value={index === 0 ? 'all' : company}>{company}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="Q4-2024">Q4 2024</option>
              <option value="Q3-2024">Q3 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {reportTypes.map((type) => (
                <option key={type.id} value={type.id}>{type.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="pdf">PDF Report</option>
              <option value="excel">Excel Spreadsheet</option>
              <option value="powerpoint">PowerPoint</option>
            </select>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Comparison</h3>
            <span className="text-sm text-gray-500">₹ Crores</span>
          </div>
          <Chart type="bar" data={revenueComparisonData} />
        </div>

        {/* Profit Margin Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Profit Margin Trend</h3>
            <span className="text-sm text-gray-500">Percentage</span>
          </div>
          <Chart type="line" data={profitMarginData} />
        </div>

        {/* Sector Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Sector Performance</h3>
            <span className="text-sm text-gray-500">By Revenue Share</span>
          </div>
          <Chart type="doughnut" data={sectorPerformanceData} />
        </div>

        {/* Key Metrics Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Metrics Summary</h3>
          <div className="space-y-4">
            {[
              { label: 'Total Revenue', value: '₹2,845 Cr', change: '+15.3%', positive: true },
              { label: 'Net Profit', value: '₹364 Cr', change: '+12.8%', positive: true },
              { label: 'Employee Count', value: '45,672', change: '+8.5%', positive: true },
              { label: 'ROA', value: '8.2%', change: '-0.5%', positive: false },
              { label: 'Debt-to-Equity', value: '0.65', change: '-0.08', positive: true }
            ].map((metric, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-sm text-gray-600">{metric.label}</span>
                <div className="text-right">
                  <span className="font-semibold text-gray-900">{metric.value}</span>
                  <span className={`ml-2 text-sm ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Generated Reports */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Generated Reports</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Last 30 days</span>
          </div>
        </div>
        <div className="space-y-4">
          {reportItems.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileSpreadsheet className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{report.title}</h4>
                  <p className="text-sm text-gray-600">{report.description}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">{report.type} • {report.size}</span>
                    <span className="text-xs text-gray-500">{report.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  report.status === 'ready' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;