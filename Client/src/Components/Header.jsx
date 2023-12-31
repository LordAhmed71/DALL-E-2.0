import { Link } from "react-router-dom";
import { logo } from "../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <LazyLoadImage src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <Link
        to="/create-post"
        className="font-inter font-medium px-4 py-2 rounded-md bg-[#6469ff] text-white"
      >
        Create
      </Link>
    </header>
  );
};

export default Header;
