import logo from "../../assets/CueHitsLogo.png";
import { LoaderCircle } from "lucide-react";
import Button from "../Button/Button";

export default function NavBar() {
  return (
    <>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar cssContainer">
          {/* Site Logo*/}
          <div className="navbar-start">
            <a href="#" className="inline-flex items-center gap-3">
              <img src={logo} alt="CueHits Logo" className="" width="82px" />
              <span class="font-display font-extrabold tracking-tight text-xl">
                <span class="text-brand-primary">Cue</span> Hits
              </span>
            </a>
          </div>

          {/* Nav Links*/}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="hover:text-brand-primary">
                <a href="#">Services</a>
              </li>
              <li className="hover:text-brand-primary">
                <a href="#">About</a>
              </li>
              <li className="hover:text-brand-primary">
                <a href="#">Capabilities</a>
              </li>
              <li className="hover:text-brand-primary">
                <a href="#">FAQ</a>
              </li>
              <li className="hover:text-brand-primary">
                <a href="#">contact</a>
              </li>
              <li className="hover:text-brand-primary">
                <a href="#">pricing</a>
              </li>
            </ul>
          </div>

          {/* Nav Cta*/}
          <div className="navbar-end">
            <Button background={true}>
              <LoaderCircle size={20} /> Open Catalog
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
