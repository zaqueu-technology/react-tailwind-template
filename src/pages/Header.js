import Logo from "../components/Logo";
import Navlinks from "../components/Navlinks";
import { useState } from "react";
import NavlinksModal from "../components/NavlinksModal";

export default function Header(p) {
  const [isOpened, setIsOpened] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  function toggleIsOpened() {
    if (isPressed) return;

    setIsPressed(true);
    setIsOpened(!isOpened);

    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  }

  const navigation = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/Products" },
    { name: "About", to: "/About" },
    { name: "Contact", to: "/Contact" },
  ];

  return (
    <>
      <header className="flex fixed z-0 bg-slate-900 text-white h-16 items-center justify-between w-screen md:px-36 px-5 text-2xl">
        <Logo />
        <Navlinks navigation={navigation} />
      </header>

      {/* opacity behind the modal */}
      <div className="fixed inset-0 z-50 w-screen h-screen pointer-events-none">
        <div
          className={`w-screen h-screen pointer-events-none fixed transition ease-in ${
            isOpened ? "opacity-80 bg-black" : ""
          }`}
        ></div>

        {/* blue modal */}
        <div
          className={`h-screen fixed w-2/3 bg-gray-900 transition ease-in  ${
            isOpened ? "translate-x-0" : "-translate-x-full"
          } flex flex-col items-center justify-start pt-20`}
        >
          <NavlinksModal
            navigation={navigation}
            toggleIsOpened={toggleIsOpened}
          />
        </div>
        <div className="fixed right-4 text-white top-5 pointer-events-auto md:hidden items-center">
          <button onClick={toggleIsOpened}>
            {isOpened ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {p.children}
    </>
  );
}