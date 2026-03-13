'use client';
import Image from "next/image";
import {Timer} from '@/components/Timer';
import { TariffTitle } from '@/components/TariffTitle';
import { MiddleBlock } from '@/components/MiddleBlock';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { useCallback, useState } from 'react';
export default function Home() {
  const [isTimerActive, setIsTimerActive] = useState(true); // состояние таймера
  const handleTimerEnd = useCallback(() => {
    setIsTimerActive(false);
  }, []); 
  return (
   <main className="h-screen bg-primary rounded-[60px]
                    max-[1000px]:rounded-none overflow-hidden flex flex-col">
      {/* Скроллируемый контент без видимого скролла */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <Timer onTimerEnd={handleTimerEnd} />
        
        {/* Общий контейнер */}
        <div className="w-full flex justify-center">
          <div className="w-full 
                          max-w-[1216px]           /* 1920px */
                          max-md:max-w-[1216px]     /* 650-1920px */
                          max-sm:max-w-[345px]      /* 376-650px */
                          max-xs:max-w-[288px]      /* ≤375px */
                          ">
            
            {/* Заголовок по левому краю */}
            <div className="
                          w-full text-left 
                          mt-[50px]              /* базовое значение */
                          max-sm:mt-[20px]        /* для экранов ≤376px */
                          max-xs:mt-[20px]        /* для экранов ≤321px */
                        ">
              <TariffTitle />
            </div>
            <div className="w-full flex justify-center
               mt-[clamp(20px,calc(20px_+_(110-20)*((100vw_-_376px)/(1920-376))),110px)]">
                 <MiddleBlock  isTimerActive={isTimerActive}/>
               </div>
           
            
            <div className="mt-[50px] mb-[60px] flex items-center justify-center
                            max-md:mt-[20px]">
              <GuaranteeSection/>
            </div>
            
          </div>
        </div>
        
        <footer className="h-[60px] max-sm:h-[0px]">
          {/* Содержимое footer */}
        </footer>
      </div>
    </main>
  );
}
