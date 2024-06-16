import Image from "next/image";
import Header from "~/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 md:p-24">
      <Header />
      <Image
        src="/starkswirllogo.png"
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        alt="StarkSwirl"
        width={100}
        height={100}
        priority
        />

      <div className="mb-32 grid md:grid-cols-2 md:text-start text-center  lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left lg:max-w-5xl">
        StarkSwirl
      </div>
    </main>
  );
}
