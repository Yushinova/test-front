import { SaleBadge } from './SaleBadge';
import { useEffect, useState } from 'react';

interface TariffCardProps {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
  isTimerActive: boolean;
}
/*TODO разнести в разные компоненты (сделать папку)*/
export const TariffCard = ({ 
  period, 
  price, 
  full_price, 
  text,
  is_best,
  isTimerActive
}: TariffCardProps) => {
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 780);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Если таймер активен - показываем скидочную цену, иначе полную
  const displayPrice = isTimerActive ? price : full_price;
  const showDiscount = isTimerActive && full_price > price;
  
  const discountPercent = showDiscount
    ? Math.round(((full_price - price) / full_price) * 100)
    : 0;

  // Мобильная версия
  if (isMobile) {
    return (
      <div className={`w-[343px] h-[131px] 
                      rounded-[20px] border-2 
                      bg-bg-card 
                      ${is_best ? 'border-border-hit' : 'border-border-grey'}
                      overflow-hidden flex
                      max-xs:w-[288px] max-xs:h-[118px]`}>
        
        {/* Левая половина - Период и цены */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="flex flex-col">
            <div className="font-sans font-medium text-[18px] text-white
                          flex items-start justify-start max-xs:text-[16px]">
              {period}
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-baseline">
                <span className={`font-sans font-semibold text-[34px] max-xs:text-[30px]
                                ${is_best ? 'text-text-orange' : 'text-white'}`}>
                  {displayPrice}
                </span>
                <span className={`font-sans text-[34px] font-semibold ml-2
                                ${is_best ? 'text-text-orange' : 'text-white'}`}>
                  ₽
                </span>
              </div>
              
              {showDiscount && (
                <div className="font-sans font-regular text-[16px] max-xs:text-[14px]
                              text-text-muted line-through -mt-2">
                  {full_price} ₽
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Правая половина */}
        <div className="w-1/2 h-full flex flex-col">
          
          {/* Верхняя часть */}
          <div className="h-2/7 w-full flex items-start justify-center mx-[30px]">
           <div className=''>
             {showDiscount && (
              <SaleBadge discount={`-${discountPercent}%`}/>
            )}
           </div>
           
            {is_best && (
              <span className="font-sans font-medium text-[14px] mx-[10px]
                               text-text-orange pt-1 max-xs:text-[13px]">
                ХИТ!
              </span>
            )}
          </div>
          
          {/* Нижняя часть */}
          <div className="h-3/5 w-full flex items-start justify-center">
            <div className="w-[120px] h-[56px]">
              <span className="font-sans font-regular text-[14px] text-white">
                {is_best ? 'Всегда быть в форме' : text}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Десктоп версия для ХИТ
  if (is_best) {
    return (
      <div className="w-[748px] h-[190px] 
                      rounded-[40px] border-2 
                      bg-bg-card border-border-hit
                      overflow-hidden relative
                      flex items-center">
        
        <div className="w-1/6 h-full flex items-start justify-end pt-0">
          {showDiscount && (
            <SaleBadge discount={`-${discountPercent}%`} />
          )}
        </div>

        <div className="w-1/4">
          <div className="flex flex-col items-center">
            <div className="font-sans font-medium text-[26px] text-white
                          flex items-center justify-center">
              {period}
            </div>
            
            <div className="flex justify-center">
              <div className="flex flex-col items-end">
                <div className="flex items-baseline">
                  <span className="font-sans font-semibold text-[50px] text-text-orange">
                    {displayPrice}
                  </span>
                  <span className="font-sans text-text-orange text-[50px] font-semibold ml-2">₽</span>
                </div>
                
                {showDiscount && (
                  <div className="font-sans font-regular text-[24px] text-text-muted line-through -mt-4">
                    {full_price} ₽
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[48%] font-sans font-regular text-[16px] text-white pl-8">
          {text}
        </div>

        <div className="flex-1 h-full flex items-start justify-start pt-3">
          <span className="font-sans font-medium text-[22px] text-text-orange">
            ХИТ!
          </span>
        </div>
      </div>
    );
  }

  // Стандартная десктоп версия
  return (
    <div className="w-[240px] h-[335px] 
                    rounded-[40px] border-2 
                    bg-bg-card border-border-grey
                    overflow-hidden
                    flex flex-col relative">
      
      <div className="h-[50px] w-full flex">
        <div className="flex-1 h-full
                      flex items-start justify-end p-0">
          {showDiscount && (
            <SaleBadge discount={`-${discountPercent}%`} />
          )}
        </div>
        <div className="flex-1 h-full" />
      </div>

      <div className="flex-1 w-full p-3 flex flex-col justify-between">
        
        <div className="font-sans font-medium text-[26px] text-white
                      flex items-center justify-center">
          {period}
        </div>
        
        <div className="h-1/2 flex justify-center">
          <div className="flex flex-col items-end">
            <div className="flex items-baseline">
              <span className="font-sans font-semibold text-[50px] text-white">
                {displayPrice}
              </span>
              <span className="font-sans text-white text-[50px] font-semibold ml-1">₽</span>
            </div>
            
            {showDiscount && (
              <div className="font-sans font-regular text-[24px] text-text-muted line-through -mt-4">
                {full_price} ₽
              </div>
            )}
          </div>
        </div>
        
        <div className="h-1/4 font-sans font-regular text-[16px] text-white">
          {text}
        </div>
      </div>     
    </div>
  );
};