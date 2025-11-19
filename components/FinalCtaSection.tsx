import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface FinalCtaSectionProps {
  whatsappLink: string;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ whatsappLink }) => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Urgency Box */}
        <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-6 md:p-8 mb-8 shadow-sm inline-block w-full max-w-2xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4 text-red-600">
            <AlertTriangle className="w-8 h-8" />
            <h3 className="text-2xl font-bold uppercase tracking-tight">Atenção</h3>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Sua Vaga no Grupo VIP Está Expirando!
          </h2>
          
          {/* Flashing Urgency Text */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-red-600 animate-bounce" />
            <p className="text-xl md:text-2xl font-extrabold text-red-600 animate-pulse">
              Restam Apenas 17 Vagas...
            </p>
          </div>
        </div>

        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Não deixe para depois. Esta é a sua oportunidade de acessar o conteúdo exclusivo que vai transformar sua saúde.
        </p>

        <WhatsAppButton 
          link={whatsappLink} 
          text="ENTRE NO GRUPO VIP" 
          className="w-full md:w-auto min-w-[300px]"
        />
        
        <div className="mt-6 flex justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">✓ 100% Gratuito</span>
            <span className="flex items-center gap-1">✓ Sem Spam</span>
        </div>

      </div>
    </section>
  );
};