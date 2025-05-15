import Hero from "../components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
