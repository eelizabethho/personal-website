import "./globals.css";
import Navbar from "../components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // this style applies a system font for better performance
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
