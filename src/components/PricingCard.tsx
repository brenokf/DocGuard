// components/PricingCard.tsx
import { CheckIcon } from '@heroicons/react/24/outline';
import { PricingCardProps } from '@/types/intex';

export const PricingCard = ({ title, price, features, isPopular = false }: PricingCardProps) => {
  return (
    <div className={`relative p-8 bg-white rounded-2xl shadow-lg transform transition-transform hover:scale-105 ${isPopular ? 'ring-2 ring-blue-600' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm">
          Mais Popular
        </div>
      )}

      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <div className="mb-8">
        <span className="text-4xl font-bold text-gray-800">{price}</span>
        <span className="text-gray-600">/mês</span>
      </div>

      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon className="w-6 h-6 text-green-500 mr-2" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full mt-8 py-3 rounded-lg transition-colors ${isPopular
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}>
        Começar Agora
      </button>
    </div>
  );
};