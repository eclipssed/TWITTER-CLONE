import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

import type { Metadata } from "next";
import { ImageKitProvider } from "@imagekit/next";

export const metadata: Metadata = {
  title: "Lama Dev X Clone",
  description: "Next.js social media application project",
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
if (!urlEndpoint) {
  throw new Error("Error: Please add urlEndpoint to .env or .env.local");
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ImageKitProvider urlEndpoint={urlEndpoint}>
          <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
            <div className="px-2 xsm:px-4 xxl:px-8 ">
              <LeftBar />
            </div>
            <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray ">
              {children}
              {modal}
            </div>
            <div className="hidden lg:flex ml-4 md:ml-8 flex-1 ">
              <RightBar />
            </div>
          </div>
        </ImageKitProvider>
      </body>
    </html>
  );
}
