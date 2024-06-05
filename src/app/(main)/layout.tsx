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
      <main className="py-[22px]">
        {children}
        <Footer />
      </main>
    </>
  );
}
