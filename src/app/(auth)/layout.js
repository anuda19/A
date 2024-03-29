import "../styles/backend-theme.css";
import "../styles/animation.css";
import "../styles/whitetheme.css";
import { Inter } from "next/font/google";
import NotificationContainer from "../(admin)/components/NotificationContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+' whitetheme'}>
        <NotificationContainer />
        <main>{children}</main>
      </body>
    </html>
  );
}
