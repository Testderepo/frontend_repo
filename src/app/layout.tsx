import "./globals.css";
import ReduxProvider from "../components/ReduxProvider";

export const metadata = {
  title: "Frontend Repo",
  description: "Next.js App with Redux and Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
          <ReduxProvider>{children}</ReduxProvider>
     
      </body>
    </html>
  );
}
