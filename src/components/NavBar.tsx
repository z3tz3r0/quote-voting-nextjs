"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

const NavBar = () => {
  const { data: session } = useSession();
  return (
    <header className="flex justify-between w-full p-4 bg-muted sticky top-0 z-99">
      <Link href="#" className="text-xl font-bold">
        Quote Voter
      </Link>
      <div className="flex gap-4 items-center">
        {session && session.user ? (
          <>
            <p className="text-lg font-semibold text-blue-500">
              {session.user?.name}
            </p>
            <Button onClick={() => signOut()}>Logout</Button>
          </>
        ) : (
          <Link href="/auth/signIn">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default NavBar;
