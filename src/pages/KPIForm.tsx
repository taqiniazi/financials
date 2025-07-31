import React, { useState } from 'react';
import { TrendingUp, Save, Building2 } from 'lucide-react';

const KPIForm = () => {
  const [formData, setFormData] = useState({
    companyId: '',
    reportingPeriod: '',
    revenue: '',
    netProfit: '',
    grossMargin: '',
    operatingMargin: '',
    netMargin: '',
    roa: '',
    roe: '',
    currentRatio: '',
    debtToEquity: '',
    assetTurnover: '',
    inventoryTurnover: '',
    receivablesTurnover: '',
    customerSatisfaction: '',
    employeeProductivity: '',
    safetyIncidents: '',
    energyConsumption: '',
    carbonEmissions: '',
    waterUsage: '',
    wasteGeneration: '',
    complianceScore: '',
    auditScore: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('KPI data:', formData);
    // Handle form submission
  };

  const companies = [
    'Punjab State Power Corporation',
    'Punjab Transport Corporation',
    'Punjab Water Supply Corporation',
    'Punjab Industrial Development Corporation'
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">KPI Data Entry</h1>
        <p className="text-gray-600 mt-1">Enter key performance indicators for state-owned companies</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Company Selection */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Building2 className="h-5 w-5 mr-2 text-blue-600" />
              Company & Period Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Company *
                </label>
                <select
                  name="companyId"
                  value={formData.companyId}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose Company</option>
                  {companies.map((company, index) => (
                    <option key={index} value={company}>{company}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reporting Period *
                </label>
                <select
                  name="reportingPeriod"
                  value={formData.reportingPeriod}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Period</option>
                  <option value="Q1-2024">Q1 2024 (Jan-Mar)</option>
                  <option value="Q2-2024">Q2 2024 (Apr-Jun)</option>
                  <option value="Q3-2024">Q3 2024 (Jul-Sep)</option>
                  <option value="Q4-2024">Q4 2024 (Oct-Dec)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Financial KPIs */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
              Financial Performance KPIs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Revenue (₹ Crores) *
                </label>
                <input
                  type="number"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleInputChange}
                  required
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter revenue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Net Profit (₹ Crores) *
                </label>
                <input
                  type="number"
                  name="netProfit"
                  value={formData.netProfit}
                  onChange={handleInputChange}
                  required
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter net profit"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gross Margin (%)
                </label>
                <input
                  type="number"
                  name="grossMargin"
                  value={formData.grossMargin}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter percentage"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Operating Margin (%)
                </label>
                <input
                  type="number"
                  name="operatingMargin"
                  value={formData.operatingMargin}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter percentage"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Net Margin (%)
                </label>
                <input
                  type="number"
                  name="netMargin"
                  value={formData.netMargin}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter percentage"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Return on Assets (%)
                </label>
                <input
                  type="number"
                  name="roa"
                  value={formData.roa}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter percentage"
                />
              </div>
            </div>
          </div>

          {/* Efficiency KPIs */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Efficiency & Liquidity KPIs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Return on Equity (%)
                </label>
                <input
                  type="number"
                  name="roe"
                  value={formData.roe}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter percentage"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Ratio
                </label>
                <input
                  type="number"
                  name="currentRatio"
                  value={formData.currentRatio}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter ratio"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Debt-to-Equity Ratio
                </label>
                <input
                  type="number"
                  name="debtToEquity"
                  value={formData.debtToEquity}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter ratio"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asset Turnover Ratio
                </label>
                <input
                  type="number"
                  name="assetTurnover"
                  value={formData.assetTurnover}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter ratio"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inventory Turnover
                </label>
                <input
                  type="number"
                  name="inventoryTurnover"
                  value={formData.inventoryTurnover}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter ratio"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Receivables Turnover
                </label>
                <input
                  type="number"
                  name="receivablesTurnover"
                  value={formData.receivablesTurnover}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter ratio"
                />
              </div>
            </div>
          </div>

          {/* Operational KPIs */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Operational KPIs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Satisfaction Score (1-10)
                </label>
                <input
                  type="number"
                  name="customerSatisfaction"
                  value={formData.customerSatisfaction}
                  onChange={handleInputChange}
                  step="0.1"
                  min="1"
                  max="10"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter score"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employee Productivity Index
                </label>
                <input
                  type="number"
                  name="employeeProductivity"
                  value={formData.employeeProductivity}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter index"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Safety Incidents Count
                </label>
                <input
                  type="number"
                  name="safetyIncidents"
                  value={formData.safetyIncidents}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter count"
                />
              </div>
            </div>
          </div>

          {/* Environmental KPIs */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Environmental KPIs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Energy Consumption (MWh)
                </label>
                <input
                  type="number"
                  name="energyConsumption"
                  value={formData.energyConsumption}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter consumption"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Carbon Emissions (Tonnes CO2)
                </label>
                <input
                  type="number"
                  name="carbonEmissions"
                  value={formData.carbonEmissions}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter emissions"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Water Usage (Million Litres)
                </label>
                <input
                  type="number"
                  name="waterUsage"
                  value={formData.waterUsage}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter usage"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Waste Generation (Tonnes)
                </label>
                <input
                  type="number"
                  name="wasteGeneration"
                  value={formData.wasteGeneration}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter waste"
                />
              </div>
            </div>
          </div>

          {/* Governance KPIs */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Governance KPIs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Compliance Score (%)
                </label>
                <input
                  type="number"
                  name="complianceScore"
                  value={formData.complianceScore}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter percentage"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Internal Audit Score (%)
                </label>
                <input
                  type="number"
                  name="auditScore"
                  value={formData.auditScore}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter percentage"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Submit KPI Data</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KPIForm;