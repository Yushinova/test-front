export const GuaranteeSection = () => {
  return (
    <div className="
      w-full 
      max-w-[1216px] 
      rounded-[30px] 
      border-[0.1px] border-border-grey
      flex flex-col
      max-lg:w-[98%]
      max-md:rounded-[20px]
    ">
      {/* Гарантия 30 дней */}
     <div className="
        w-[461px] h-[68px]
        rounded-[30px]
        border border-border-guarantee
        flex items-center justify-center
        font-sans font-medium text-text-tag
        mt-6 mb-1 ml-6

        /* Базовый размер текста для всех экранов */
        text-[28px]
        /* Для экранов ≤650px */
        max-md:w-[343px] max-md:h-[44px]
        max-md:text-[22px]
        max-md:mt-4 max-md:mb-1
        max-md:ml-4
        max-md:rounded-[20px]

        /* Для экранов ≤376px */
        max-sm:w-[294px] max-sm:h-[44px]
        max-sm:text-[18px]
        max-sm:mt-4 max-sm:mb-1
        max-sm:ml-2
        max-sm:rounded-[20px]

        /* Для экранов ≤321px */
        max-xs:w-[265px] max-xs:h-[41px]
        max-xs:text-[16px]
        max-xs:mt-4 max-xs:mb-1
        max-xs:mx-auto           /* центрируем по горизонтали */
        max-xs:ml-auto           /* отключаем левый отступ */
        max-xs:mr-auto           /* отключаем правый отступ */
        max-xs:rounded-[20px]
        ">
        гарантия возврата 30 дней
        </div>

      {/* Текст с описанием */}
      <div className="
        font-sans font-regular leading-tight
        text-text-guarantee text-left
        mb-6 mt-6 mx-6

        /* Базовый размер текста для всех экранов */
        text-[24px] leading-tight

        /* Для экранов ≤650px */
        max-md:text-[16px]
        max-md:mb-4 max-md:mt-1
        max-md:mx-4

        /* Для экранов ≤376px */
        max-sm:text-[13px]
        max-sm:mb-[14px]
        max-sm:mx-2
    

        /* Для экранов ≤321px */
        max-xs:text-[13px]
        max-xs:mb-[14px] max-xs:mt-2
   
      ">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые 
        результаты уже через 4 недели! Мы даже готовы полностью вернуть 
        твои деньги в течение 30 дней с момента покупки, если ты не 
        получишь видимых результатов.
      </div>
    </div>
  );
};