import close from '../assets/icons/close.svg';

// eslint-disable-next-line react/prop-types
function SideBar({ setShowSideBar }) {
  const names = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  return (
    <div className="absolute z-20 inset-0 w-full  h-screen border backdrop-contrast-50 sm:hidden transition-all duration-500">
      <div className="px-6 py-6 bg-white max-w-[240px] border-r h-full">
        <button onClick={() => setShowSideBar(false)}>
          <img src={close} alt="close" className="mb-8" />
        </button>
        <nav>
          <ul className=" text-xs text-black cursor-pointer space-y-2">
            {names.map((name) => (
              <li
                key={name}
                className="hover:text-primary font-semibold text-sm"
              >
                {name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
