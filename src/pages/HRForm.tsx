import React, { useState } from 'react';
import { Users, Save, Building2 } from 'lucide-react';

const HRForm = () => {
  const [formData, setFormData] = useState({
    companyId: '',
    reportingPeriod: '',
    totalEmployees: '',
    maleEmployees: '',
    femaleEmployees: '',
    officersCount: '',
    managersCount: '',
    executivesCount: '',
    clerksCount: '',
    workersCount: '',
    regularEmployees: '',
    contractualEmployees: '',
    consultants: '',
    avgAge: '',
    avgExperience: '',
    newHires: '',
    separations: '',
    trainingHours: '',
    trainingCost: '',
    welfareExpenses: '',
    retirementBenefits: ''
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
    console.log('HR data:', formData);
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
        <h1 className="text-3xl font-bold text-gray-900">HR Data Entry</h1>
        <p className="text-gray-600 mt-1">Enter human resources information for state-owned companies</p>
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

          {/* Employee Count */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-green-600" />
              Employee Demographics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Employees *
                </label>
                <input
                  type="number"
                  name="totalEmployees"
                  value={formData.totalEmployees}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter total count"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Male Employees
                </label>
                <input
                  type="number"
                  name="maleEmployees"
                  value={formData.maleEmployees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter male count"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Female Employees
                </label>
                <input
                  type="number"
                  name="femaleEmployees"
                  value={formData.femaleEmployees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter female count"
                />
              </div>
            </div>
          </div>

          {/* Employee Categories */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Employee Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Officers
                </label>
                <input
                  type="number"
                  name="officersCount"
                  value={formData.officersCount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Count"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Managers
                </label>
                <input
                  type="number"
                  name="managersCount"
                  value={formData.managersCount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Count"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Executives
                </label>
                <input
                  type="number"
                  name="executivesCount"
                  value={formData.executivesCount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Count"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Clerks
                </label>
                <input
                  type="number"
                  name="clerksCount"
                  value={formData.clerksCount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Count"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Workers
                </label>
                <input
                  type="number"
                  name="workersCount"
                  value={formData.workersCount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Count"
                />
              </div>
            </div>
          </div>

          {/* Employment Type */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Employment Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Regular Employees
                </label>
                <input
                  type="number"
                  name="regularEmployees"
                  value={formData.regularEmployees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter count"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contractual Employees
                </label>
                <input
                  type="number"
                  name="contractualEmployees"
                  value={formData.contractualEmployees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter count"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Consultants
                </label>
                <input
                  type="number"
                  name="consultants"
                  value={formData.consultants}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter count"
                />
              </div>
            </div>
          </div>

          {/* Employee Statistics */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Employee Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Age (Years)
                </label>
                <input
                  type="number"
                  name="avgAge"
                  value={formData.avgAge}
                  onChange={handleInputChange}
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 42.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Experience (Years)
                </label>
                <input
                  type="number"
                  name="avgExperience"
                  value={formData.avgExperience}
                  onChange={handleInputChange}
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 15.2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Hires (This Period)
                </label>
                <input
                  type="number"
                  name="newHires"
                  value={formData.newHires}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter count"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Separations (This Period)
                </label>
                <input
                  type="number"
                  name="separations"
                  value={formData.separations}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter count"
                />
              </div>
            </div>
          </div>

          {/* Training & Development */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Training & Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Training Hours
                </label>
                <input
                  type="number"
                  name="trainingHours"
                  value={formData.trainingHours}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter hours"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Training Cost (₹ Lakhs)
                </label>
                <input
                  type="number"
                  name="trainingCost"
                  value={formData.trainingCost}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                />
              </div>
            </div>
          </div>

          {/* Employee Benefits */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Employee Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Welfare Expenses (₹ Lakhs)
                </label>
                <input
                  type="number"
                  name="welfareExpenses"
                  value={formData.welfareExpenses}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Retirement Benefits (₹ Lakhs)
                </label>
                <input
                  type="number"
                  name="retirementBenefits"
                  value={formData.retirementBenefits}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
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
              <span>Submit HR Data</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HRForm;