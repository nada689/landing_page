'use client'
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from "next/navigation";

//header component
export default function NavBar() {
  const pathname = usePathname();

  type NavLink = {
    href: string;
    label: string;
  };
  const links: NavLink[] = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#docs", label: "Docs" },
    { href: "#blogs", label: "Blog" },
  ];
  return (
    <>
      <header className="my-5 bg-transparent max-sm:px-1 absolute w-full z-20 overflow-x-hidden">
        <nav className="flex flex-row justify-end items-center w-[90%] px-20 mx-auto max-lg:justify-between max-lg:px-20 max-md:p-5 max-lg:w-full max-lg:block">
          <div className="flex flex-row justify-around items-center mx-auto max-lg:justify-between">
            <Link
              href={`/`}
            >
              <h1 className="text-3xl text-foreground">⁎ scout</h1>
            </Link>
            <Image
              src="/img/home/menu.png"
              width={60}
              height={60}
              className={"hidden max-lg:block"}
              alt={"menu"}
              onClick={() => {
                const menu = document.querySelector(".menu_nav");
                menu?.classList.toggle("seen");
              }}
            />
          </div>
          <div className="menu_nav w-[85%] flex max-lg:hidden max-md:!top-[24%] max-sm:!top-[28%]">
            <div className="justify-start gap-7 w-[60%] flex items-center flex-row flex-wrap max-lg:block">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname === link.href ? "text-foreground font-bold text-xl" : "text-xl text-[#CBD5E1]"}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="w-[40%] flex items-center flex-row flex-wrap gap-6 justify-start max-lg:menu_btn">
              <input type="button" value="Login" className="border border-[#CBD5E1] text-[#CBD5E1] rounded-3xl py-2 w-[45%] text-xl" />
              <input type="button" value="Sign Up" className="bg-foreground rounded-3xl py-2 w-[45%] text-xl text-background" />
            </div>
          </div>
        </nav>
        <hr className="text-[#25252733] mt-3" />
      </header>
    </>
  )
}