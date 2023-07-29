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
        <div className="w-full h-screen flex flex-col mt-40 items-center">
          <h2 className="text-center text-5xl font-bold mb-5">KLASSER</h2>
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
      </div>
    </main>
  )
}