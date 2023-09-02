import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { ToggleProvider } from "@/components/ToggleContext";
export default function Home() {
  return (
    <div className="w-full h-auto">
      <ToggleProvider>
        <Navbar />
        <Hero />
        <Main />
      </ToggleProvider>
    </div>
  );
}
