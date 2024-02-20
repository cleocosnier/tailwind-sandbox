import canalLogo from "../assets/canalplus-logo-v2.svg";

const Logo = () => {
  return (
    <div className="w-100 h-10">
      <img src={canalLogo} alt="" className="object-contain w-full h-full" />
    </div>
  );
};

export default Logo;
