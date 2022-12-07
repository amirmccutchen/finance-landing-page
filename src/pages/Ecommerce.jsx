import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartDat } from '../data/sampleData';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className = 'font-bold text-gray-400'>Earnings</p>
              <p className = 'text-2xl'>$25311.79</p>
            </div>
          </div>
          <div className = 'mt-6'>
            <Button
              color = 'white'
              bgColor = 'blue'
              text = 'Download'
              borderRadius = '10px'
              size = 'md'
            />
          </div>
        </div>
        <div className = 'flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((earning) => (
            <div
              key = {earning.title}
              className = 'bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type = 'button'
                style = {{ color: earning.iconColor, backgroundColor: earning.iconBg}}
                className = 'text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {earning.icon}
              </button>
              <p className = 'mt-3'>
                <span className = 'text-lg font-semibold'>
                  {earning.amount}
                </span>
                <span className = {`text-sm text-${earning.pcColor} ml-2`}>
                  {earning.percentage}
                </span>
              </p>
              <p className = 'text-sm text-gray-400 mt-1'>
                {earning.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className = 'flex gap-10 flex-wrap justify-center'>
        <div className = 'bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className = 'flex justify-between'>
            <p className = 'font-semibold text-xl'>Revenue Updates</p>
            <div className = 'flex items-center gap-4'>
              <p className = 'flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className = 'mt-10 flex gap-10 flex-wrap justify-center'>
            <div className = 'border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className = 'text-3xl font-semibold'>$106,338</span>
                  <span className = 'p-1.5 hover: drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className = 'text-gray-500 mt-1'>Budget</p>
              </div>
              <div>
                <p>
                  <span className = 'text-3xl font-semibold'>$62,931</span>
                </p>
                <p className = 'text-gray-500 mt-1'>Expenses</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ecommerce;