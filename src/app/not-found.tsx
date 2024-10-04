import Link from "next/link";

export const metadata = {
  title: "Not Found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <section className="grid h-full w-full place-items-center">
      <div className="flex flex-col items-center justify-center px-4 py-8 text-center md:px-8 lg:px-24">
        <p className="text-6xl font-bold tracking-wider text-neutral-200 md:text-7xl lg:text-9xl">
          404
        </p>
        <p className="mt-4 text-2xl font-bold tracking-wider text-neutral-400 md:text-3xl lg:text-5xl">
          Page Not Found
        </p>
        <Link
          href="/"
          className="mt-6 flex items-center space-x-2 bg-neutral-900 bg-primary px-4 py-2 rounded-md text-white transition-transform duration-150 focus:scale-105"
          title="Return Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"></path>
          </svg>
          <span>Return Home</span>
        </Link>
      </div>
    </section>
  );
}
