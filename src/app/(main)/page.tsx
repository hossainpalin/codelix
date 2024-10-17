import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image
        className="size-40"
        src="/logo.png"
        alt="logo"
        width={512}
        height={512}
      />
      <h1 className="mt-5 text-2xl text-neutral-200 text-center">
        Codelix Online Compiler
      </h1>
      <p className="mt-1 font-light text-neutral-300 text-center">
        Write and run your code online anywhere any time
      </p>
      <Link
        className="mt-3 rounded-lg bg-green-700 px-8 py-2 hover:bg-green-800"
        href="/python">
        Get Started
      </Link>
    </div>
  );
}
