import { Nunito } from "next/font/google"
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Johan Porfolio",
  description: "Welcome to my personal porfolio",
  keywords: ["React, Projects, NextJS"]
}

const nunito = Nunito({
  weight: ["300", "400", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
});



export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body style={{ background: "#f4f4f4" }} className={nunito.className}>
        {children}
      </body>
    </html>
  )
}
