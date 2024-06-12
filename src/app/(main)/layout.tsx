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
        {children}
        <Footer />
      </main>
    </>
  );
}
