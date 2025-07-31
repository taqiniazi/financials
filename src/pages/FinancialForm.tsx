import React, { useState } from 'react';
import { FileText, Save, Building2, Calculator } from 'lucide-react';

const FinancialForm = () => {
  const [activeTab, setActiveTab] = useState('income');
  const [formData, setFormData] = useState({
    companyId: '',
    reportingPeriod: '',
    financialYear: '',
    // Income Statement
    totalRevenue: '',
    operatingRevenue: '',
    nonOperatingRevenue: '',
    costOfGoodsSold: '',
    grossProfit: '',
    operatingExpenses: '',
    sellingExpenses: '',
    adminExpenses: '',
    depreciationAmortization: '',
    operatingIncome: '',
    interestIncome: '',
    interestExpense: '',
    otherIncome: '',
    profitBeforeTax: '',
    taxExpense: '',
    netProfit: '',
    // Balance Sheet
    currentAssets: '',
    cashAndEquivalents: '',
    accountsReceivable: '',
    inventory: '',
    prepaidExpenses: '',
    nonCurrentAssets: '',
    propertyPlantEquipment: '',
    intangibleAssets: '',
    investments: '',
    totalAssets: '',
    currentLiabilities: '',
    accountsPayable: '',
    shortTermDebt: '',
    accruedExpenses: '',
    nonCurrentLiabilities: '',
    longTermDebt: '',
    deferredTaxLiabilities: '',
    totalLiabilities: '',
    shareCapital: '',
    retainedEarnings: '',
    reserves: '',
    totalEquity: '',
    // Cash Flow Statement
    netCashFromOperating: '',
    netCashFromInvesting: '',
    netCashFromFinancing: '',
    netChangeInCash: '',
    beginningCashBalance: '',
    endingCashBalance: ''
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
    console.log('Financial data:', formData);
    // Handle form submission
  };

  const companies = [
    'Punjab State Power Corporation',
    'Punjab Transport Corporation',
    'Punjab Water Supply Corporation',
    'Punjab Industrial Development Corporation'
  ];

  const tabs = [
    { id: 'income', label: 'Income Statement', icon: Calculator },
    { id: 'balance', label: 'Balance Sheet', icon: FileText },
    { id: 'cashflow', label: 'Cash Flow', icon: TrendingUp }
  ];

  const renderIncomeStatement = () => (
    <div className="space-y-6">
      {/* Revenue Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Revenue (₹ Crores) *
            </label>
            <input
              type="number"
              name="totalRevenue"
              value={formData.totalRevenue}
              onChange={handleInputChange}
              required
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Operating Revenue (₹ Crores)
            </label>
            <input
              type="number"
              name="operatingRevenue"
              value={formData.operatingRevenue}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Non-Operating Revenue (₹ Crores)
            </label>
            <input
              type="number"
              name="nonOperatingRevenue"
              value={formData.nonOperatingRevenue}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
        </div>
      </div>

      {/* Costs & Expenses */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Costs & Expenses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cost of Goods Sold (₹ Crores)
            </label>
            <input
              type="number"
              name="costOfGoodsSold"
              value={formData.costOfGoodsSold}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Operating Expenses (₹ Crores)
            </label>
            <input
              type="number"
              name="operatingExpenses"
              value={formData.operatingExpenses}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selling Expenses (₹ Crores)
            </label>
            <input
              type="number"
              name="sellingExpenses"
              value={formData.sellingExpenses}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Administrative Expenses (₹ Crores)
            </label>
            <input
              type="number"
              name="adminExpenses"
              value={formData.adminExpenses}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Depreciation & Amortization (₹ Crores)
            </label>
            <input
              type="number"
              name="depreciationAmortization"
              value={formData.depreciationAmortization}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
        </div>
      </div>

      {/* Profit & Loss */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profit & Loss</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gross Profit (₹ Crores)
            </label>
            <input
              type="number"
              name="grossProfit"
              value={formData.grossProfit}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Operating Income (₹ Crores)
            </label>
            <input
              type="number"
              name="operatingIncome"
              value={formData.operatingIncome}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Income (₹ Crores)
            </label>
            <input
              type="number"
              name="interestIncome"
              value={formData.interestIncome}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Expense (₹ Crores)
            </label>
            <input
              type="number"
              name="interestExpense"
              value={formData.interestExpense}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profit Before Tax (₹ Crores)
            </label>
            <input
              type="number"
              name="profitBeforeTax"
              value={formData.profitBeforeTax}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tax Expense (₹ Crores)
            </label>
            <input
              type="number"
              name="taxExpense"
              value={formData.taxExpense}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
              placeholder="Enter amount"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderBalanceSheet = () => (
    <div className="space-y-6">
      {/* Assets */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Assets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Assets (₹ Crores)
            </label>
            <input
              type="number"
              name="currentAssets"
              value={formData.currentAssets}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cash & Cash Equivalents (₹ Crores)
            </label>
            <input
              type="number"
              name="cashAndEquivalents"
              value={formData.cashAndEquivalents}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Accounts Receivable (₹ Crores)
            </label>
            <input
              type="number"
              name="accountsReceivable"
              value={formData.accountsReceivable}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Inventory (₹ Crores)
            </label>
            <input
              type="number"
              name="inventory"
              value={formData.inventory}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Non-Current Assets (₹ Crores)
            </label>
            <input
              type="number"
              name="nonCurrentAssets"
              value={formData.nonCurrentAssets}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property, Plant & Equipment (₹ Crores)
            </label>
            <input
              type="number"
              name="propertyPlantEquipment"
              value={formData.propertyPlantEquipment}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Assets (₹ Crores) *
            </label>
            <input
              type="number"
              name="totalAssets"
              value={formData.totalAssets}
              onChange={handleInputChange}
              required
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
              placeholder="Enter amount"
            />
          </div>
        </div>
      </div>

      {/* Liabilities */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Liabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Liabilities (₹ Crores)
            </label>
            <input
              type="number"
              name="currentLiabilities"
              value={formData.currentLiabilities}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Accounts Payable (₹ Crores)
            </label>
            <input
              type="number"
              name="accountsPayable"
              value={formData.accountsPayable}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short-term Debt (₹ Crores)
            </label>
            <input
              type="number"
              name="shortTermDebt"
              value={formData.shortTermDebt}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Non-Current Liabilities (₹ Crores)
            </label>
            <input
              type="number"
              name="nonCurrentLiabilities"
              value={formData.nonCurrentLiabilities}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Long-term Debt (₹ Crores)
            </label>
            <input
              type="number"
              name="longTermDebt"
              value={formData.longTermDebt}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Liabilities (₹ Crores)
            </label>
            <input
              type="number"
              name="totalLiabilities"
              value={formData.totalLiabilities}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
        </div>
      </div>

      {/* Equity */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Shareholders' Equity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Share Capital (₹ Crores)
            </label>
            <input
              type="number"
              name="shareCapital"
              value={formData.shareCapital}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Retained Earnings (₹ Crores)
            </label>
            <input
              type="number"
              name="retainedEarnings"
              value={formData.retainedEarnings}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reserves & Surplus (₹ Crores)
            </label>
            <input
              type="number"
              name="reserves"
              value={formData.reserves}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Equity (₹ Crores) *
            </label>
            <input
              type="number"
              name="totalEquity"
              value={formData.totalEquity}
              onChange={handleInputChange}
              required
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
              placeholder="Enter amount"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderCashFlow = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cash Flow Statement</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Net Cash from Operating Activities (₹ Crores) *
            </label>
            <input
              type="number"
              name="netCashFromOperating"
              value={formData.netCashFromOperating}
              onChange={handleInputChange}
              required
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Net Cash from Investing Activities (₹ Crores) *
            </label>
            <input
              type="number"
              name="netCashFromInvesting"
              value={formData.netCashFromInvesting}
              onChange={handleInputChange}
              required
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Net Cash from Financing Activities (₹ Crores) *
            </label>
            <input
              type="number"
              name="netCashFromFinancing"
              value={formData.netCashFromFinancing}
              onChange={handleInputChange}
              required
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Net Change in Cash (₹ Crores)
            </label>
            <input
              type="number"
              name="netChangeInCash"
              value={formData.netChangeInCash}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Beginning Cash Balance (₹ Crores)
            </label>
            <input
              type="number"
              name="beginningCashBalance"
              value={formData.beginningCashBalance}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ending Cash Balance (₹ Crores)
            </label>
            <input
              type="number"
              name="endingCashBalance"
              value={formData.endingCashBalance}
              onChange={handleInputChange}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
              placeholder="Enter amount"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Financial Data Entry</h1>
        <p className="text-gray-600 mt-1">Enter comprehensive financial statements for state-owned companies</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Financial Year *
                </label>
                <select
                  name="financialYear"
                  value={formData.financialYear}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select FY</option>
                  <option value="2023-24">FY 2023-24</option>
                  <option value="2024-25">FY 2024-25</option>
                </select>
              </div>
            </div>
          </div>

          {/* Financial Statement Tabs */}
          <div>
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-6">
              {activeTab === 'income' && renderIncomeStatement()}
              {activeTab === 'balance' && renderBalanceSheet()}
              {activeTab === 'cashflow' && renderCashFlow()}
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
              <span>Submit Financial Data</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinancialForm;