// components/ComparisonTable.tsx
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

type FeatureComparison = {
  name: string;
  description: string;
  basic: boolean;
  premium: boolean;
};

type ComparisonTableProps = {
  features: FeatureComparison[];
};

export const ComparisonTable = ({ features }: ComparisonTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left py-4 px-6 font-semibold text-gray-800">Recurso</th>
            <th className="text-center py-4 px-6 font-semibold text-gray-800">Básico</th>
            <th className="text-center py-4 px-6 font-semibold text-gray-800">Premium</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <td className="py-4 px-6">
                <div className="font-medium text-gray-800">{feature.name}</div>
                <div className="text-gray-600 text-sm">{feature.description}</div>
              </td>
              <td className="text-center py-4 px-6">
                {feature.basic ? (
                  <CheckIcon className="w-6 h-6 text-green-500 mx-auto" />
                ) : (
                  <XMarkIcon className="w-6 h-6 text-red-500 mx-auto" />
                )}
              </td>
              <td className="text-center py-4 px-6">
                {feature.premium ? (
                  <CheckIcon className="w-6 h-6 text-green-500 mx-auto" />
                ) : (
                  <XMarkIcon className="w-6 h-6 text-red-500 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};