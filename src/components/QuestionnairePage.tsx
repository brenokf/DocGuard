'use client'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FormData } from '@/types/intex'
// import { DOCUMENT_TYPES } from '@/lib/constants'
/**
 * Renders the QuestionnairePage component, which provides a form for users to select
 * business type, location, and document purpose. Utilizes react-hook-form for form
 * handling and validation. Displays error messages for required fields and manages
 * loading state during form submission.
 */
export default function QuestionnairePage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      if (loading) {
        console.log("waiting")
      }
      console.log(data)
    } catch (error) {
      console.error('Erro ao identificar documento:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8">Qual documento você precisa?</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Tipo de Negócio */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tipo de Negócio
            </label>
            <select
              {...register('businessType', { required: 'Campo obrigatório' })}
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            >
              <option value="">Selecione...</option>
              <option value="ecommerce">E-commerce/Loja Virtual</option>
              <option value="app">Aplicativo Móvel</option>
              <option value="servicos">Prestação de Serviços</option>
              <option value="freelance">Trabalho Freelancer</option>
              <option value="outros">Outros</option>
            </select>
            {errors.businessType && (
              <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>
            )}
          </div>

          {/* Localização */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Localização do Negócio
            </label>
            <select
              {...register('location', { required: 'Campo obrigatório' })}
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            >
              <option value="">Selecione...</option>
              <option value="br">Brasil</option>
              <option value="europa">Europa (GDPR)</option>
              <option value="eua">Estados Unidos</option>
              <option value="outros">Outros Países</option>
            </select>
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
            )}
          </div>

          {/* Finalidade do Documento */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Finalidade Principal
            </label>
            <select
              {...register('documentPurpose', { required: 'Campo obrigatório' })}
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            >
              <option value="">Selecione...</option>
              <option value="privacidade">Proteção de Dados (LGPD/GDPR)</option>
              <option value="termos-uso">Regras de Uso do Serviço</option>
              <option value="contrato-cliente">Contrato com Clientes</option>
              <option value="parcerias">Acordo entre Parceiros</option>
            </select>
            {errors.documentPurpose && (
              <p className="text-red-500 text-sm mt-1">{errors.documentPurpose.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Identificando...' : 'Gerar Documento Adequado'}
          </button>
        </form>
      </div>
    </div>
  );
}