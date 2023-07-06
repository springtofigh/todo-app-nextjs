import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const { data: session, status } = useSession();
  console.log({ session, status });
  return (
    <div className="bg-rose-500 w-full shadow-lg">
      <nav className="bg-rose-500 flex justify-between py-4 mb-6 max-w-screen-xl mx-auto">
        <ul
          className={`font-medium flex items-center gap-x-6 ${
            status === "loading" && !session ? "opacity-0" : "opacity-100"
          }`}
        >
          <li>
            <Link href="/">
              <a>
                خانه
              </a>
            </Link>
          </li>
          <li>
            <Link href="/todos">
              <a>
                تودو ها
              </a>
            </Link>
          </li>
            <Link href="/profile">
              <a>
                پروفایل
              </a>
            </Link>
          {!session && status !== "loading" && (
            <li>
              <button onClick={() => signIn("github")}>
                ورود
              </button>
            </li>
          )}
          {session && (
            <li>
              <button onClick={() => signOut()}>
                خروج
              </button>
            </li>
          )}
        </ul>
        <h1 className="font-bold text-slate-900">
          تو دو لیست شما
        </h1>
      </nav>
    </div>
  );
};

export default Header