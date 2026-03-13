interface SaleBadgeProps {
  discount: string;
}

export const SaleBadge = ({ discount }: SaleBadgeProps) => {
  return (
    <div className="flex items-center justify-center
                    w-[66px] h-[39px] text-[18px]
                    max-sm:w-[48px] max-sm:h-[27px] max-sm:text-[14px]
                    max-xs:w-[42px] max-xs:h-[23px] max-xs:text-[12px]
                    text-white font-gilroy font-bold
                    text-center"
         style={{
           backgroundImage: "url('/sale.png')",
           backgroundSize: '100% 100%',
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center'
         }}>
      {discount}
    </div>
  );
};