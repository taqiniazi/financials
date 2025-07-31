import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  Filler
} from 'chart.js';
import { Chart as ReactChart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartProps {
  type: 'line' | 'bar' | 'doughnut' | 'pie';
  data: any;
  options?: any;
}

const Chart: React.FC<ChartProps> = ({ type, data, options = {} }) => {
  const defaultOptions = {
    responsive: true, 
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
      }
    },
    scales: type === 'doughnut' || type === 'pie' ? {} : {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
        }
      },
      y: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
        },
        ticks: {
          color: '#6B7280',
        }
      }
    }
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <div className="h-80">
      <ReactChart type={type} data={data} options={mergedOptions} />
    </div>
  );
};

export default Chart;