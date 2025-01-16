import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex flex-col items-center gap-[35px] p-[25px] pt-10 sm:flex-row sm:justify-between sm:px-[45px] lg:px-[100px]">
      <div className="p-2.5">
        <Link className="leading-none" href="/">
          <Image
            src="/roam-logo.png"
            alt="Roam Reality Logo"
            width={243}
            height={95}
            className="w-[170px] lg:w-[116px]"
          />
        </Link>
      </div>
      <nav className="flex gap-[26px] p-2.5 text-[22px] font-black text-white">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/download">Download</Link>
      </nav>
    </header>
  );
};
