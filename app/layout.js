import {Balsamiq_Sans} from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

const balsamiqSans = Balsamiq_Sans({subsets: ["latin"], weight: ["400", "700"]});
export const metadata = {
    title: "Burgers",
    description: "Все о бургерах",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={balsamiqSans.className}>
        <div className="content">
            <Header/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    );
}
