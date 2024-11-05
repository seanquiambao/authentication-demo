"use client";
import { useSession } from "next-auth/react";

type props = {
  children: React.ReactNode;
};

const Protected = ({ children }: props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        {session.user?.email}
        {children}
      </div>
    );
  } else {
    return <div>402 Error - You need to signin</div>;
  }
};

export default Protected;
