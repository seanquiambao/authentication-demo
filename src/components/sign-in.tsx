"use client";
import { signIn, useSession, signOut } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <div>Signed in as {session.user?.email}</div>{" "}
        <div onClick={void signOut()}>Sign Out</div>
      </div>
    );
  } else {
    return (
      <div
        onClick={void signIn("google", { callbackUrl: "/protected" })}
        className="cursor-pointer"
      >
        Sign In
      </div>
    );
  }
};

export default SignIn;
