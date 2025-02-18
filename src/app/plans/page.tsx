// pages/plans.tsx
import { ComparisonTable } from '@/components/ComparisonTable';
import { PricingCard } from '@/components/PricingCard';

import { FEATURE_COMPARISON } from '@/lib/constants';

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Escolha Seu Plano</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <PricingCard
            title="Básico"
            price="R$29"
            features={[
              "3 documentos/mês",
              "Modelos essenciais",
              "Suporte por e-mail",
              "Atualizações mensais"
            ]}
          />

          <PricingCard
            title="Premium"
            price="R$99"
            isPopular
            features={[
              "Documentos ilimitados",
              "Todos os modelos premium",
              "Suporte 24/7 prioritário",
              "Atualizações em tempo real",
              "Integração com assinatura digital"
            ]}
          />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-8">Comparação Detalhada</h2>
          <ComparisonTable features={FEATURE_COMPARISON} />
        </div>
      </div>
    </div>
  );
}