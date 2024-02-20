import Menu from "./Menu";
import Logo from "./Logo";
import Search from "./Search";
import Btn from "./Btn";
import UserButton from "./UserButton";

const Header = ({ code }) => {
  let state = {
    itemsMenu: [
      {
        name: "Nos créations",
        url: "https://www.canalplus.com/creations/",
      },
      {
        name: "Cinéma",
        url: "https://www.canalplus.com/cinema/",
      },
      {
        name: "Séries",
        url: "https://www.canalplus.com/series/",
      },
      {
        name: "Sport",
        url: "https://www.canalplus.com/sport/",
      },
      {
        name: "Docs",
        url: "https://www.canalplus.com/documentaires/",
      },
      {
        name: "Jeunesse",
        url: "https://www.canalplus.com/jeunesse/",
      },
      {
        name: "Chaînes",
        url: "https://www.canalplus.com/chaines/",
      },
    ],
  };
  return (
    <div className="fixed bg-secondary w-full z-10 h-[64px] flex items-center">
      <div className="py-2 px-5 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <div className="pl-4">
              <Menu leState={state} />
            </div>
          </div>
          <div className="flex items-center">
            <Search />
            <div className="px-4">
              <Btn maxHeight="32px" code={code[1].customConfig}>
                s'abonner
              </Btn>
            </div>
            <UserButton code={code[2].htmlClasses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
