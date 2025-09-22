import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Why from "@/components/why";
import Green from "@/components/green";
import Statistics from "@/components/statistics";

export default function Home() {
  return (
    <main className="pt-[96px]">
      <Hero />
      <Partners />
      <Why />
      <Green />
      {/* Bild från sidan 1 */}
      <div className="w-full inline-flex justify-start items-center gap-16 bg-gray-50 px-[80px] py-[96px]">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch justify-center text-gray-900 text-4xl font-extrabold  leading-10">Bild från plattformen 1</div>
                <div className="self-stretch justify-start text-gray-500 text-xl font-normal  leading-loose">Maecenas ullamcorper purus eros, non cursus lectus ultricies a. Sed sed ullamcorper ex, vitae suscipit purus. Sed id odio enim. </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch h-px bg-gray-200" />
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch pt-8 flex flex-col justify-start items-start gap-4">
                        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                            <div data-color="Green" data-dark-mode="False" data-size="xxs" data-type="Circle" className="w-4 h-4 bg-green-100 rounded-full flex justify-center items-center">
                                <div className="w-2 h-2 relative overflow-hidden">
                                    <div className="w-2 h-1.5 left-0 top-[0.67px] absolute bg-green-500" />
                                </div>
                            </div>
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                                <div className="self-stretch justify-start text-gray-900 text-base font-medium  leading-normal">ABC 123</div>
                            </div>
                        </div>
                        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                            <div data-color="Green" data-dark-mode="False" data-size="xxs" data-type="Circle" className="w-4 h-4 bg-green-100 rounded-full flex justify-center items-center">
                                <div className="w-2 h-2 relative overflow-hidden">
                                    <div className="w-2 h-1.5 left-0 top-[0.67px] absolute bg-green-500" />
                                </div>
                            </div>
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                                <div className="self-stretch justify-start text-gray-900 text-base font-medium  leading-normal">DEF 456</div>
                            </div>
                        </div>
                        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                            <div data-color="Green" data-dark-mode="False" data-size="xxs" data-type="Circle" className="w-4 h-4 bg-green-100 rounded-full flex justify-center items-center">
                                <div className="w-2 h-2 relative overflow-hidden">
                                    <div className="w-2 h-1.5 left-0 top-[0.67px] absolute bg-green-500" />
                                </div>
                            </div>
                            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                                <div className="self-stretch justify-start text-gray-900 text-base font-medium  leading-normal">GHI 789</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start text-gray-500 text-xl font-normal  leading-loose">Donec ut ligula quis massa malesuada commodo. Maecenas non ultrices lacus, id elementum augue. </div>
                </div>
            </div>
        </div>
        <img className="bg-white flex-1 h-[529px] p-2.5 rounded-lg shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.05)] shadow-md border border-gray-100" src="/img1.png" />
      </div>

      {/* Bild från sidan 2*/}
      <div className="w-full inline-flex justify-start items-center gap-16 py-[96px] px-[80px] bg-gray-50">
        <img className="flex-1 bg-white h-[529px] p-2.5 rounded-lg shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.05)] shadow-md border border-gray-100" src="/img1.png" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch justify-center text-gray-900 text-4xl font-extrabold  leading-10">Bild från plattformen 2</div>
                <div className="self-stretch justify-start text-gray-500 text-xl font-normal  leading-loose">Maecenas ullamcorper purus eros, non cursus lectus ultricies a. Sed sed ullamcorper ex, vitae suscipit purus. Sed id odio enim. </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch h-px bg-gray-200" />
                <div className="self-stretch pt-8 flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                        <div data-color="Green" data-dark-mode="False" data-size="xxs" data-type="Circle" className="w-4 h-4 bg-green-100 rounded-full flex justify-center items-center">
                            <div className="w-2 h-2 relative overflow-hidden">
                                <div className="w-2 h-1.5 left-0 top-[0.67px] absolute bg-green-500" />
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                            <div className="self-stretch justify-start text-gray-900 text-base font-medium  leading-normal">En riktig häftigt funktion</div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                        <div data-color="Green" data-dark-mode="False" data-size="xxs" data-type="Circle" className="w-4 h-4 bg-green-100 rounded-full flex justify-center items-center">
                            <div className="w-2 h-2 relative overflow-hidden">
                                <div className="w-2 h-1.5 left-0 top-[0.67px] absolute bg-green-500" />
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                            <div className="self-stretch justify-start text-gray-900 text-base font-medium  leading-normal">En ännu coolare funktion</div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                        <div data-color="Green" data-dark-mode="False" data-size="xxs" data-type="Circle" className="w-4 h-4 bg-green-100 rounded-full flex justify-center items-center">
                            <div className="w-2 h-2 relative overflow-hidden">
                                <div className="w-2 h-1.5 left-0 top-[0.67px] absolute bg-green-500" />
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                            <div className="self-stretch justify-start text-gray-900 text-base font-medium  leading-normal">En trygg och säker funktion</div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                        <div data-color="Green" data-dark-mode="False" data-size="xxs" data-type="Circle" className="w-4 h-4 bg-green-100 rounded-full flex justify-center items-center">
                            <div className="w-2 h-2 relative overflow-hidden">
                                <div className="w-2 h-1.5 left-0 top-[0.67px] absolute bg-green-500" />
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                            <div className="self-stretch justify-start text-gray-900 text-base font-medium  leading-normal">En otroligt värdefull funktion</div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                        <div data-color="Green" data-dark-mode="False" data-size="xxs" data-type="Circle" className="w-4 h-4 bg-green-100 rounded-full flex justify-center items-center">
                            <div className="w-2 h-2 relative overflow-hidden">
                                <div className="w-2 h-1.5 left-0 top-[0.67px] absolute bg-green-500" />
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                            <div className="self-stretch justify-start text-gray-900 text-base font-medium  leading-normal">En betryggande säkerhet</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Statistics />
      {/* Vill du veta mer kontakta oss*/}
      <div className="py-24 bg-white inline-flex flex-col justify-start items-center w-full">
        <div className="inline-flex justify-center items-center">
            <div className="inline-flex flex-col justify-start items-center gap-6">
                <div className="self-stretch text-center justify-center text-gray-900 text-4xl font-extrabold  leading-10">Vill du veta mer?</div>
                <div className="self-stretch text-center justify-start text-gray-500 text-xl font-normal leading-loose">Vi berättar gärna mer om hur Fuelpool kan underlätta din vardag</div>
                <div className="px-5 py-2.5 bg-blue-700 rounded-lg inline-flex justify-center items-center gap-2">
                    <div className="justify-start text-white text-sm font-medium leading-tight">Kontakta oss</div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
