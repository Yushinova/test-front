import { useState, useEffect } from 'react';

interface FormCheckboxProps {
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  error?: boolean;
}

export const FormCheckbox = ({ 
  className, 
  checked: controlledChecked, 
  onChange,
  error = false 
}: FormCheckboxProps) => {
  const [internalChecked, setInternalChecked] = useState(false);
  
  // Используем controlled или uncontrolled режим
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onChange?.(newChecked);
  };
  
  return (
    <div className={`
      w-[649px] h-[36px] 
      flex items-center 
      font-sans font-regular text-[18px] text-text-consent
      
      /* Адаптация */
      max-md:w-[339px] max-md:h-[30px] max-md:text-[12px]
      max-xs:w-[292px] max-xs:h-[42px] max-xs:text-[12px]
      
      ${className || ''}
    `}>
      
      <div className="relative flex items-center">
        <input 
          type="checkbox" 
          className="
            w-[32px] h-[32px] opacity-0 absolute cursor-pointer
            max-md:w-[30px] max-md:h-[30px]
            max-xs:w-[30px] max-xs:h-[30px]
          "
          checked={checked}
          onChange={handleChange}
        />
        
        <div className={`
          w-[32px] h-[32px] border-[0.1px] rounded
          flex items-center justify-center
          transition-all duration-200
          
          /* Стили для ошибки и обычного состояния */
          ${error && !checked 
            ? 'border-red-500 bg-red-500/10' 
            : 'border-border-grey'
          }
          ${checked ? 'border-border-hit' : ''}
          
          max-md:w-[30px] max-md:h-[30px]
          max-xs:w-[30px] max-xs:h-[30px]
        `}>
          {checked && (
            <img 
              src="/check.png" 
              alt="✓"
              className="
                w-5 h-5 object-contain
                max-md:w-4 max-md:h-4
                max-xs:w-4 max-xs:h-4
              "
            />
          )}
        </div>
      </div>

      <span className="ml-3 max-sm:ml-2 max-xs:ml-2 leading-[1]">
        Я согласен с{' '}
        <a 
          href="/offer" 
          className="underline hover:no-underline transition-all duration-200"
        >
          офертой рекуррентных платежей
        </a>
        {' '}и{' '}
        <a 
          href="/privacy" 
          className="underline hover:no-underline transition-all duration-200"
        >
          Политикой конфиденциальности
        </a>
      </span>
      
    </div>
  );
};