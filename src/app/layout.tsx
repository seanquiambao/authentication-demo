import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { options } from "@/utils/auth";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: LayoutProps) => {
  const session = await getServerSession(options);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
