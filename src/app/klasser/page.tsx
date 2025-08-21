import DropdownButton from "@/components/dropdown_button/dropdown_button";
import MobileNavbar from "@/components/navbar/mobile_navbar";
import classes, { WorkoutClass } from "@/data/classes";

export default function ClassesPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white">
      <MobileNavbar forWhiteBg={true} />
      
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Mobile View */}
        <div className="w-full h-full flex flex-col pt-40 pb-20 items-center w-900:hidden">
          <h2 className="text-center text-4xl font-bold mb-5">KLASSER</h2>
          <h3 className="text-center text-xl mb-5 px-4">Vi har klasser för Barn 7-9år & 9-12 år ungdomar 13-16år, nybörjare, fortsättning & avancerad</h3>
          {classes.map((item: WorkoutClass, index: number) =>
            <DropdownButton
              key={index}
              item={item} // Pass the whole object
            />
          )}
        </div>

        {/* Desktop View */}
        <div className="w-full h-full pt-40 pb-20 hidden w-900:grid w-900:grid-cols-2 gap-x-12 gap-y-16">
          <div className="col-span-2 text-center">
            <h2 className="text-4xl font-bold mb-5">KLASSER</h2>
            <h3 className="text-2xl">Vi har klasser för Barn 7-9år & 9-12 år ungdomar 13-16år, nybörjare, fortsättning & avancerad</h3>
          </div>
          
          {classes.map((item: WorkoutClass, index: number) =>
            <div className="flex flex-col text-left bg-white p-6 rounded-lg shadow-lg border border-black" key={index}>
              <h3 className="font-bold text-2xl mb-3">{item.header}</h3>
              <p className="text-base">{item.description}</p>
              
              {item.levels && item.levels.length > 0 && (
                <div className="mt-4 space-y-3">
                  {item.levels.map((level, levelIndex) => (
                    <div key={levelIndex} className="border-t pt-3">
                      <h4 className="font-bold text-lg">{level.header}</h4>
                      <p className="text-base">{level.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {item.rawHtml && (
                <div className="mt-4 text-base border-t pt-3" dangerouslySetInnerHTML={{ __html: item.rawHtml }} />
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

