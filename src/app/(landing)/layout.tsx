import "./../custom.css";
import "./../globals.css";

import { FooterSection, NavbarSection } from "@/components";

export default function LandingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-gradient-to-tl from-slate-300 via-slate-50 to-slate-300">
        <NavbarSection />
        <main className="pt-[80px] overflow-hidden ">{children}</main>
        <FooterSection />
      </div>
    </>
  );
}
