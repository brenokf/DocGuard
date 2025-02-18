export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center md:text-left grid md:grid-cols-3 gap-8">
          {/* Coluna 1 */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">DocGuard</h3>
            <p className="text-sm text-gray-400">
              Soluções jurídicas digitais para empreendedores modernos
            </p>
          </div>

          {/* Coluna 2 */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/legal/privacidade" className="text-sm text-gray-400 hover:text-white">Política de Privacidade</a></li>
              <li><a href="/legal/termos" className="text-sm text-gray-400 hover:text-white">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <p className="text-sm text-gray-400">
              contato@docguard.com<br />
              (11) 99999-9999
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} DocGuard. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};