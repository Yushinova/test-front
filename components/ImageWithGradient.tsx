import Image from 'next/image';
export const ImageWithGradient = () => {
  return (
    <div className="relative
                    w-[380.73px] h-[767px]
                    max-xl:w-[380.73px] max-xl:h-[767px]
                    max-md:w-[124px] max-md:h-[250px]
                    max-sm:w-[124px] max-sm:h-[250px]
                    max-xs:w-[99px] max-xs:h-[200px]
                    flex-shrink-0">
      <Image
        src="/man.png"
        alt="Man"
        width={380.73}
        height={767}
        className="w-full h-full object-cover object-center block mt-[-12]
        max-xs:mt-0 "
        priority
      />
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                      w-[362px] h-[80px]
                      max-xl:w-[362px] max-xl:h-[80px]
                      max-md:w-[118px] max-md:h-[26px]
                      max-sm:w-[118px] max-sm:h-[26px]
                      max-xs:w-[94px] max-xs:h-[21px]
                      pointer-events-none z-10"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, var(--color-bg-page) 100%)'
        }}
      />
    </div>
  );
};