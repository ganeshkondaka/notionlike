import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center">
          AI  <span className="text-green-700"> note taking 
            </span> <br /> assistant.
        </h1>
        <div className="mt-4"></div>
        <div className="text-green-900 text-center text-xl">AI powered</div>
      </div>
 
    </div>
  );
}
