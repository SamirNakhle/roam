import { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main className="page-base bg-black-gradient">{children}</main>;
}
