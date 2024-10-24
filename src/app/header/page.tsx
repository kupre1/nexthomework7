"use client";
import { Logo } from "../fonts";
import Image from "next/image";
import Link from "next/link";
import { navlinks } from "../links/navbar";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#F5F8FF]">
      <div className="flex items-center justify-center px-16">
        <div className="max-w-[1440px] w-full">
          <nav className="flex items-center justify-between w-full py-6">
            <Image src={Logo} alt="Site Logo" width={170} height={37} />
            <ul className="max-w-[499px] w-full justify-evenly items-center bg-white h-16  rounded-2xl flex">
              {navlinks.map((link) => (
                <li key={link.id}>
                  <Link
                    className={`${
                      pathname === link.href
                        ? "text-[#252432] font-bold"
                        : "text-[#8987A1] font-normal"
                    }`}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="">
              <Link className="text-[#8987A1] px-3" href={"/signin"}>
                Sign In
              </Link>
              <Link
                className="px-9 py-3 text-white font-bold text-base rounded-[10px] bg-[#4E47FF]"
                href={"/signup"}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
