// import logoBlue from '../assets/images/logoBlue.png';

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
  { name: "Testimonials", path: "#testimonials" },
];

function Navbar() {
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 z-50 flex w-full bg-[#172b4d] py-6 sm:px-16 px-4 items-center"
    >
      <div className="navbar-logo w-[50px]">
        <a href="/"><img src={""} alt='TBA Logo'></img></a>
      </div>

      <div className="flex ml-auto gap-6 px-8 text-indigo-600 text-lg font-bold uppercase">
        {navItems.map((item) => (
          <a href={item.path} key={item.path}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>

  );
}

export default Navbar;
