export const CtaSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para Proteger Seu Negócio?
        </h2>
        <p className="text-lg mb-8">Comece agora mesmo e evite multas desnecessárias</p>
        <a
          href="https://wa.me/SEUNUMERO"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Começar Agora pelo WhatsApp
        </a>
      </div>
    </section>
  );
};