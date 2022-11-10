import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
        <Link href="/">
        <p className={router.pathname === "/" ? "active" : ""}>
            Home
        </p>
        </Link>
        <Link href="/about">
        <p className={router.pathname === "/about" ? "active" : ""}>
            About
        </p>
        </Link>
        <style jsx>{`
        nav { 
            background-color: tomato; 
        }
        p {
            text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}