import { BENEFITS } from '@/lib/constants';
import { FaCheckCircle } from 'react-icons/fa';

export const BenefitsSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Por que Escolher o DocGuard?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BENEFITS.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};