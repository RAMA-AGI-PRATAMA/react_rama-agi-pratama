import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed z-40 right-0 left-0 top-0 h-[60px] mt-7 flex items-center justify-between px-[20px]">
      <a href="" className="text-white tracking-[2px]">
        <img src={logo} alt="" />
      </a>
      <ul className="flex items-center gap-[30px] [&>li>a]:text-white [&>li>a]:tracking-[1px]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Price List</a>
        </li>
        <li>
          <a href="#">Destination</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
