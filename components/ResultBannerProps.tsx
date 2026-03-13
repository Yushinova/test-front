import Image from 'next/image';
interface ResultBannerProps {
  className?: string;
}

export const ResultBanner = ({ className }: ResultBannerProps) => {
  return (
    <div className={`
                    w-[499px] h-[78px] text-[16px] rounded-[20px]
                    max-md:w-[343px] max-md:h-[76px] max-md:text-[12px] max-md:rounded-[16px] 
                    max-xs:w-[288px] max-xs:h-[76px] max-xs:text-[12px] max-xs:rounded-[12px] 
                    bg-bg-card
                    font-sans font-regular text-white
                    relative
                    
                    ${className || ''}`}>
      
      {/* Верхний отступ 8px */}
      <div className="pt-4 w-full flex max-sm:pt-3 max-xs:pt-2">
        {/* Левая часть с восклицательным знаком из вектора */}
        <div className="
                      w-[40px] flex items-start justify-center pt-2
                      max-xs:w-[30px] max-xs:pt-1
                      ">
                  <img 
                  src="/vector.png" 
                  alt="!"
                  width={26}
                  height={26}
                  className="w-auto h-auto"
                  />
        </div>

        {/* Правая часть с текстом */}
        <div className="
                      flex-1 h-full flex items-start pr-4 
                      max-sm:max-w-[280px]
                      max-xs:max-w-[250px] max-xs:pr-2
                      ">
          <span>Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц</span>
        </div>
      </div>
    </div>
  );
};