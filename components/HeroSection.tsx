import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface HeroSectionProps {
  whatsappLink: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ whatsappLink }) => {
  const benefits = [
    "Resultados visíveis em poucas semanas.",
    "Sem dietas restritivas malucas.",
    "Comunidade exclusiva de apoio."
  ];

  return (
    <section className="relative w-full pb-12 md:pb-20 md:pt-10 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* 
          Alterado para flex-col em mobile para que o Texto/Botão apareça ANTES da imagem.
          Isso garante que o botão esteja na primeira dobra.
        */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pt-6">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-5 md:space-y-6 text-center lg:text-left order-1">
            
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wider mb-1">
              SUPLEMENTO NATURAL
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              O Segredo para <span className="text-emerald-600">Emagrecer Rápido</span>, Sem Passar Fome.
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Descubra o grão milagroso que está ajudando milhares de mulheres a recuperar a autoestima de forma 100% natural.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              <WhatsAppButton 
                link={whatsappLink} 
                text="ENTRE NO GRUPO VIP" 
                className="w-full md:w-auto"
              />
              <p className="mt-3 text-xs text-gray-500">
                🔒 Acesso seguro e instantâneo via WhatsApp
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 mt-4 lg:mt-0">
            <a 
              href={whatsappLink} 
              className="relative group block overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all z-10"></div>
              <img 
                src="https://i.imgur.com/2qqdnb2.jpeg" 
                alt="Transformação de perda de peso" 
                className="w-full max-w-md lg:max-w-full h-auto object-cover aspect-[4/5] md:aspect-square lg:aspect-[4/5]"
              />
              {/* Floating Tag on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20 border-l-4 border-emerald-500">
                <p className="text-emerald-800 font-bold text-sm">
                  REVELADO: O Método Natural
                </p>
                <p className="text-xs text-gray-600">Clique para saber mais</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};