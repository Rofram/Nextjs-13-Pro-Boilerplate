import { QueryProvider } from "@/shared/contexts/QueryClient.context";
import "./globals.css";

export const metadata = {
  title: "Next.Js 13 Pro Boilerplate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>
          <QueryProvider>
            {children}
          </QueryProvider>
        </body>
    </html>
  );
}
