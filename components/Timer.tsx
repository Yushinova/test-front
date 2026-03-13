'use client';
import { useState, useEffect, useRef } from 'react';

// Интерфейс для пропсов
interface TimerProps {
  onTimerEnd?: () => void;
}

export const Timer = ({ onTimerEnd }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [isRed, setIsRed] = useState(false);
  const timerEndedRef = useRef(false);

  useEffect(() => {
    //Если таймер уже завершен - ничего не делаем
    if (timerEndedRef.current) return;

    if (timeLeft <= 0) {
      timerEndedRef.current = true;
      setTimeout(() => {
        onTimerEnd?.();
      }, 0);
      return;
    }

    //Запускаем интервал
    const timerInterval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft, onTimerEnd]);

  // Эффект для мигания
  useEffect(() => {
    if (timeLeft <= 30 && timeLeft > 0) {
      setIsRed(true);
      
      const blinkInterval = setInterval(() => {
        setIsRed(prev => !prev);
      }, 500);

      return () => clearInterval(blinkInterval);
    } else {
      setIsRed(false);
    }
  }, [timeLeft]);

  // Форматирование времени
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {
      mins: mins.toString().padStart(2, '0'),
      secs: secs.toString().padStart(2, '0')
    };
  };

  const { mins, secs } = formatTime(timeLeft);
  const textColor = timeLeft <= 0 
    ? 'text-white' 
    : (isRed ? 'text-text-time-r' : 'text-text-time-y');

  return (
    <div className="w-full bg-offer-green rounded-t-[60px] h-[103px]
                    max-md:h-[85px] max-lg:rounded-t-none
                    max-xs:h-[74px]">
      
        <div className="flex flex-col items-center justify-center">
          
          {/* Адаптивный текст */}
          <p className="
            font-sans text-center font-semibold leading-tight text-[24px] mt-[8px]
            max-md:text-[18px]
            max-xs:text-[14px]
          ">
            Успейте открыть пробную неделю
          </p>
          
          {/* Таймер со звездочками - с адаптивным размером */}
          <div className={`flex items-center justify-center gap-[8px] text-[40px] font-raleway font-bold
                          max-md:text-[32px] max-xs:text-[28px]
                          ${textColor}`}>
            
            {/* Левая звездочка */}
            <span className="text-[14px] inline-flex items-center justify-center w-[14px] h-[14px] translate-y-[0.15em]">
              ✦
            </span>
            
            {/* Время с адаптивным размером */}
            <div className="flex items-center font-raleway gap-[8px] max-md:gap-[4px]">
              <span>
                {mins}
              </span>
              <span>
                :
              </span>
              <span>
                {secs}
              </span>
            </div>
            
            {/* Правая звездочка */}
            <span className="text-[14px] inline-flex items-center justify-center w-[14px] h-[14px] translate-y-[0.15em]">
              ✦
            </span>
            
          </div>
          
        </div>
      </div>

  );
};