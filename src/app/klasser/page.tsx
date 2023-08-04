import DropdownButton from "@/components/dropdown_button/dropdown_button";
import MobileNavbar from "@/components/navbar/mobile_navbar";
import classes from "@/data/classes";

export default function ClassesPage() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <MobileNavbar
        forWhiteBg={true}
      />
      <div className="w-full">
        <div className="w-full h-screen flex flex-col mt-40 mb-20 items-center w-900:hidden">
          <h2 className="text-center text-4xl font-bold mb-5">KLASSER</h2>
          {classes.map((item, index) =>
            item.classLevels ?
              item.coaches ? <DropdownButton
                header={item.header}
                dropdownText={item.text}
                classLevels={item.classLevels}
                coaches={item.coaches}
              /> : <DropdownButton
                header={item.header}
                dropdownText={item.text}
                classLevels={item.classLevels}
              /> : item.coaches ? <DropdownButton
                header={item.header}
                dropdownText={item.text}
                coaches={item.coaches}
              /> :
                <DropdownButton
                  header={item.header}
                  dropdownText={item.text}
                />
          )}
        </div>
        <div className="w-full h-screen mt-40 hidden w-900:grid w-900:grid-cols-2 gap-y-10">
          <h2 className="text-center text-4xl font-bold mb-5 col-span-2">KLASSER</h2>
          {classes.map((item, index) =>
            <div className="text-center px-10 w-900:text-xl w-900:px-28" key={index}>
              <h3 className="font-bold w-900:text-2xl">{item.header}</h3>
              <p className="w-900:mt-5">{item.text}</p>
              <br></br>
              <p>{item.classLevels ? `Vi har klasser för ${item.classLevels}` : ''}</p>
              <br></br>
              <p>{item.coaches ? `Tränare: ${item.coaches}` : ''}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}