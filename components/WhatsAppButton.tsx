import React from 'react';

interface WhatsAppButtonProps {
  link: string;
  text: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ link, text, className = "" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-3
        bg-emerald-500 hover:bg-emerald-600 text-white 
        font-bold py-4 px-6 rounded-full shadow-lg 
        transition-all duration-300 ease-in-out
        uppercase tracking-wide text-lg md:text-xl
        animate-pulse-scale
        ${className}
      `}
    >
      {/* Ícone oficial do WhatsApp SVG */}
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.231-.298.347-.497.116-.198.058-.372-.029-.548-.087-.174-.776-1.871-1.063-2.562-.28-.675-.56-.584-.77-.595-.202-.011-.434-.013-.665-.013-.231 0-.607.088-.924.432-.317.346-1.21 1.183-1.21 2.885 0 1.701 1.238 3.345 1.41 3.575.173.23 2.437 3.72 5.905 5.216.826.356 1.47.57 1.966.728.82.262 1.567.225 2.16.137.66-.098 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      <span>{text}</span>
    </a>
  );
};