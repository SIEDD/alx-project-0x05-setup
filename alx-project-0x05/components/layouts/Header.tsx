import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      {/* App Title */}
      <Link href="/">
        <a className="text-2xl font-bold">Splash App</a>
      </Link>

      {/* Button Group */}
      <div className="flex gap-4">
        {!["/counter-app"].includes(pathname) ? (
          <>
            <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
            <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
          </>
        ) : (
          <p className="font-semibold text-lg">Current count: {count}</p>
        )}
      </div>
    </header>
  );
};

export default Header;

