import Footer from "../_components/global/Footer";
import Navbar from "../_components/global/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[94%] lg:max-w-[87.5%] xl:max-w-[1192px]">
        {/* Invisible div that acts as a space-adder between the navbar and the rest of the body */}
        <div className="h-[54px] sm:h-[82px] xl:h-0"></div>
        {children}
        <Footer />
      </main>
    </>
  );
}
