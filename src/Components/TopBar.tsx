import "../styles/TopBar.css";
import { Mail, Phone, Info } from "lucide-react";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        {/* <a href="#">
          <Facebook size={16} />
        </a>
        <a href="#">
          <Instagram size={16} />
        </a> */}
      </div>

      <div className="topbar-right">
        <span>
          <Info size={14} />
          Zavolejte, napište...
        </span>

        <span>
          <Mail size={14} />
          petr@stereopromotion.cz
        </span>

        <span>
          <Phone size={14} />
          +420 737 813 605
        </span>
      </div>
    </header>
  );
}
