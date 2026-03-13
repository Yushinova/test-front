'use client';

import { useEffect, useState } from 'react';
import { ImageWithGradient } from './ImageWithGradient';
import { TariffCard } from './TariffCard';
import { ResultBanner } from './ResultBannerProps';
import { FormCheckbox } from './FormCheckbox';
import { BuySection } from './BuySection';
import { fetchTariffs, Tariff } from '@/api/tariffs';

// Добавляем интерфейс пропсов
interface MiddleBlockProps {
  isTimerActive: boolean; // получаем состояние таймера с главной
}

export const MiddleBlock = ({ isTimerActive }: MiddleBlockProps) => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [loading, setLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  
  const handleBuyClick = () => {
    if (!isChecked) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } else {
      console.log('Purchasing...');
      // Здесь логика покупки
    }
  };

  useEffect(() => {
    fetchTariffs().then((data) => {
      console.log('✅ Тарифы:', data);
      
      // Просто переворачиваем массив в обратном порядке
      const reversed = [...data].reverse();
      
      setTariffs(reversed);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full flex justify-center">
      
      {/* Контейнер */}
      <div className="w-full max-w-[1216px] 
                      bg-primary/50 overflow-hidden
                      flex flex-col 
                      min-[1300px]:flex-row">
        
        {/* Левая часть с картинкой */}
        <div className="w-full 
                        min-[1300px]:w-auto 
                        min-[1300px]:h-auto
                        flex items-center justify-center
                        ">
          <ImageWithGradient />
        </div>
        {/* Правая часть - карточки тарифов */}
        <div className="flex-1 w-full flex justify-center ml-[75px]
                        min-h-[300px] min-lg 
                        overflow-auto z-20
                        max-lg:ml-0 max-lg:mt-[-8px]
                        max-sm:overflow-visible ">
          
          {/* Контейнер шириной 756px для карточек и баннера */}
          <div className="w-full max-w-[756px] mx-0">
            
            {loading ? (
              <div className="text-white">Загрузка тарифов...</div>
            ) : (
              <div className="flex flex-col gap-4">
                
                {/* Карточки тарифов */}
                <div className="flex flex-wrap justify-center gap-3.5
                                max-md:gap-2">
                  {tariffs.map((tariff, index) => (
                    <div key={`${tariff.id}-${index}`}>
                      <TariffCard
                        id={tariff.id}
                        period={tariff.period}
                        price={tariff.price}
                        full_price={tariff.full_price}
                        is_best={tariff.is_best}
                        text={tariff.text}
                        isTimerActive={isTimerActive} // передаем состояние таймера
                      />
                    </div>
                  ))}
                </div>

                {/* Баннер внизу */}
                <div className="max-md:flex max-md:justify-center">
                  <ResultBanner />
                </div>
                
                {/* Чекбокс */}
                <div className="max-md:flex mt-[10px] max-md:justify-center">
                  <FormCheckbox 
                    checked={isChecked}
                    onChange={setIsChecked}
                    error={showError}
                  />
                </div>
                
                {/* Секция покупки */}
                <div className="max-md:flex max-md:justify-center">
                  <BuySection onBuyClick={handleBuyClick} />
                </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};