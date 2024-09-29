import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
// import { useSession } from "next-auth/react"; //client rendering
import { auth } from "@/auth";
import { handleSignOut } from "@/app/actions/authActions";

const Navbar = async() => {
    //in case of server rendering component make it a async await function
//   const { data: session } = useSession();//client rendering
//   console.log(session);//client rendering

  const session= await auth()//server rendering

  return (
    <>
      <nav className="flex justify-between items-center py-3 px-4 bg-white shadow-md">
        <Link href="/" className="text-xl font-bold">
          Auth js
        </Link>
        {!session ? (
          <Link href="/auth/signin">
            <Button variant="default">Sign in</Button>
          </Link>
        ) : (
          <form action={handleSignOut}>
            <Button variant="default" type="submit">
              Sign Out
            </Button>
          </form>
        )}
      </nav>
    </>
  );
};

export default Navbar;
