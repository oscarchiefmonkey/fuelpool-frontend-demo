import React from "react";

const Statistics: React.FC = () => {
  return (
    <section>
      <div className="w-full py-24 bg-gray-50 border-t border-b border-gray-100 inline-flex flex-col justify-start items-center gap-16 overflow-hidden">
          <div className="w-[1280px] flex flex-col justify-start items-center gap-4">
              <div className="self-stretch text-center justify-center text-gray-900 text-4xl font-extrabold  leading-10">Statistik som gör skillnad</div>
          </div>
          <div className="flex flex-col justify-start items-center gap-8">
              <div className="w-[1280px] inline-flex justify-start items-start gap-16">
                  <div className="flex-1 p-12 bg-gray-100 rounded-lg inline-flex flex-col justify-start items-start">
                      <div className="self-stretch flex flex-col justify-start items-start gap-2">
                          <div className="self-stretch text-center justify-start text-gray-900 text-5xl font-extrabold  leading-[60px]">40%</div>
                          <div className="self-stretch text-center justify-start text-gray-900 text-xl font-semibold  leading-normal">besparad tid</div>
                          <div className="self-stretch text-center justify-start text-gray-500 text-base font-normal  leading-normal">med volymbevakning</div>
                      </div>
                  </div>
                  <div className="flex-1 p-12 bg-gray-100 rounded-lg inline-flex flex-col justify-start items-start">
                      <div className="self-stretch flex flex-col justify-start items-start gap-2">
                          <div className="self-stretch text-center justify-start text-gray-900 text-5xl font-extrabold  leading-[60px]">75 MSEK</div>
                          <div className="self-stretch text-center justify-start text-gray-900 text-xl font-semibold  leading-normal">sparade kostnader</div>
                          <div className="self-stretch text-center justify-start text-gray-500 text-base font-normal  leading-normal">sedan starten 2025</div>
                      </div>
                  </div>
                  <div className="flex-1 p-12 bg-gray-100 rounded-lg inline-flex flex-col justify-start items-start">
                      <div className="self-stretch flex flex-col justify-start items-start gap-2">
                          <div className="self-stretch text-center justify-start text-gray-900 text-5xl font-extrabold  leading-[60px]">6000+</div>
                          <div className="self-stretch text-center justify-start text-gray-900 text-xl font-semibold  leading-normal">Registrerade kunder</div>
                          <div className="self-stretch text-center justify-start text-gray-500 text-base font-normal  leading-normal">Antal registrerade cit</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Statistics;
