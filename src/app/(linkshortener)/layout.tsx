import Footer from "../_components/global/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Link Shortener",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="mx-auto max-w-[94%] lg:max-w-[87.5%] xl:max-w-[1192px] py-[22px]">
        {children}
        <Footer />
      </main>
    </>
  );
}
