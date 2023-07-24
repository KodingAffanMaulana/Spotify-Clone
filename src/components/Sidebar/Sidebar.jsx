import './index.css';
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <div className="list-items">
          <FiHome />
          <p>Home</p>
        </div>
        <div className="list-items">
          <FiSearch />
          <p>Cari</p>
        </div>
        <div className="list-items">
          <BiLibrary />
          <p>Koleksi Kamu</p>
        </div>
        <hr />
        <br />
        <li>Discover</li>
        <li>Charts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
