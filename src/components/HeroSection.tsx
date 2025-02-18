import Link from "next/link";

export const HeroSection = () => (
  <section className="text-center pt-32 pb-20 px-4 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
        Documentos Jurídicos Prontos em <br className="hidden lg:block" />
        <span className="text-yellow-400">5 Minutos</span>
      </h1>
      <Link href="/documents" className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-extrabold hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        Gerar Meu Documento Agora →
      </Link>
    </div>
  </section>
);