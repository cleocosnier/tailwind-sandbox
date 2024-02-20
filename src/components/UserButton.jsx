import UserIcon from "../assets/user-icon.png";
import Button from "./Btn";

const UserButton = ({ code }) => {
  const toggleMenu = () => {
    const menu = document.getElementById("menudropdown");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("block");
    } else {
      menu.classList.remove("block");
      menu.classList.add("hidden");
    }
  };
  let codeValue = code ? code : "";
  return (
    <div className="relative">
      <div className="w-[32px] h-[32px] cursor-pointer" onClick={toggleMenu}>
        <img src={UserIcon} alt="" className="object-contain w-full h-full" />
      </div>
      <div className="absolute right-0 bg-dark-grey w-[20rem] rounded-lg">
        <div id="menudropdown" className="p-4 hidden">
          <div className="h4">Compte CANAL+</div>
          <p>Connectez-vous pour accéder à vos programmes et services</p>
          <div className="py-4">
            <Button code={codeValue}> Se connecter </Button>
          </div>
          <hr className="opacity-50"></hr>
          <ul>
            <li className="py-1">
              <a href="">Nos offres </a>
            </li>
            <li className="py-1">
              <a href="">Espace client</a>
            </li>
            <li className="py-1">
              <a href="">Assistance</a>
            </li>
            <li className="py-1">
              <a href="">Fonctionnalités</a>
            </li>
            <li className="py-1">
              <a href="">CANAL+ Responsable</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserButton;
