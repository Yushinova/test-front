import { useState } from 'react';

interface BuySectionProps {
  className?: string;
  onBuyClick?: () => void;
}

export const BuySection = ({ className, onBuyClick }: BuySectionProps) => {
  return (
    <div className={`w-full font-sans ${className || ''}`}>
      {/* Кнопка Купить */}
      <div className='w-full max-md:text-center'>
          <button 
        onClick={onBuyClick}
        className="
                  w-[352px] h-[66px] mx-[10px]
                  bg-bg-btn rounded-[20px]
                  text-text-btn font-bold text-[18px]
                  hover:bg-orange-400 transition-colors duration-200
                  animate-[pulse_1.5s_ease-in-out_infinite] hover:animate-none
                  
                  max-md:w-[343px] max-md:h-[63px] max-md:text-[18px] max-md:mx-0
                  max-xs:w-[288px] max-xs:h-[55px] max-xs:text-[18px]
                  cursor-pointer
                "
      >
        Купить
      </button>
      </div>
      

      {/* Текст под кнопкой */}
      <div className="
        mt-6 font-sans mx-[10px] leading-tight
        text-text-bue text-[14px] font-regular
        max-md:text-[10px] max-md:mx-0
        max-xs:text-[10px] max-xs:mt-2
        min-[376px]:max-[800px]:px-4
      ">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание 
        денежных средств для получения пожизненного доступа к приложению. 
        Пользователь соглашается, что данные кредитной/дебетовой карты будут 
        сохранены для осуществления покупок дополнительных услуг сервиса в 
        случае желания пользователя.
      </div>
    </div>
  );
};