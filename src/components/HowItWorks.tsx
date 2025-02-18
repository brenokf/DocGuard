'use client';

import { STEPS } from '@/lib/constants';
import { FaGavel, FaBalanceScale, FaFileContract, FaShieldAlt } from 'react-icons/fa';
import { Element } from 'react-scroll';

const ICONS = [FaGavel, FaBalanceScale, FaFileContract, FaShieldAlt];

export const HowItWorks = () => (
  <Element name="howItWorksSection">
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Como Funciona
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={step.number} className="text-center p-6 bg-white shadow-lg rounded-lg">
                <div className="bg-blue-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Passo {step.number}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </Element>
);