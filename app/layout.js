import { Nunito } from "next/font/google"

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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

      <body style={{ background: "#f4f4f4 " }} className={nunito.className}>
        {children}
      </body>
    </html>
  )
}
