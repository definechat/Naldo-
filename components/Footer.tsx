import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 text-sm">
      <div className="container mx-auto max-w-6xl text-center space-y-6">
        
        <div className="border-b border-gray-800 pb-6 mb-6">
            <h4 className="text-white font-bold text-lg mb-2">Aviso Legal</h4>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Os resultados podem variar de pessoa para pessoa. As informações fornecidas neste site não substituem o aconselhamento médico profissional. Sempre consulte um médico ou profissional de saúde qualificado antes de iniciar qualquer novo programa de dieta ou exercícios.
            </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Emagreça Urgente. Todos os direitos reservados.</p>
          <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
          <p>Termos de Uso</p>
          <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
          <p>Políticas de Privacidade</p>
        </div>
      </div>
    </footer>
  );
};