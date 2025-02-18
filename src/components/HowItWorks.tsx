import { STEPS } from '@/lib/constants';

export const HowItWorks = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Como Funciona
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STEPS.map((step) => (
          <div key={step.number} className="text-center p-4">
            <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm sm:text-base">
              {step.number}
            </div>
            <p className="text-xs sm:text-sm md:text-base">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);