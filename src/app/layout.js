import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import DataProvider from "@/context/DataProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job search",
  description: "This is the dashboard of job search portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0e13]">
        <DataProvider>
          <Header />
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
