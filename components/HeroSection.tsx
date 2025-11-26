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
    <section className="relative w-full pb-10 md:pb-20 md:pt-10 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* 
          Ajuste de pt-6 para pt-2 para subir o conteúdo mobile.
          Gap reduzido de gap-8 para gap-6.
        */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 pt-2">
          
          {/* Content Side */}
          {/* Reduzi space-y-5 para space-y-3 em mobile para compactar */}
          <div className="w-full lg:w-1/2 space-y-3 md:space-y-6 text-center lg:text-left order-1">
            
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs md:text-sm font-bold tracking-wider mb-0">
              SUPLEMENTO NATURAL
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              O Segredo para <span className="text-emerald-600">Emagrecer Rápido</span>, Sem Passar Fome.
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Descubra o grão milagroso que está ajudando milhares de mulheres a recuperar a autoestima de forma 100% natural.
            </p>

            {/* 
               MUDANÇA CRÍTICA: O Botão foi movido para ANTES da lista de benefícios.
               Isso garante que ele apareça na primeira dobra em telas pequenas.
            */}
            <div className="pt-2 md:pt-4">
              <WhatsAppButton 
                link={whatsappLink} 
                text="ENTRE NO GRUPO VIP" 
                className="w-full md:w-auto"
              />
              <p className="mt-2 text-xs text-gray-500">
                🔒 Acesso seguro e instantâneo via WhatsApp
              </p>
            </div>

            {/* Benefits List - Agora abaixo do botão */}
            <ul className="space-y-2 pt-2 text-left max-w-md mx-auto lg:mx-0 bg-white/50 md:bg-white p-2 md:p-4 rounded-xl shadow-none md:shadow-sm md:border border-gray-100">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 mt-2 lg:mt-0">
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