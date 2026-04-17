import { Archivo } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-archivo",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={archivo.variable}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
                />
            </head>
            <body className={`${archivo.variable} antialiased`}>
                <SmoothScrollProvider>
                    {children}
                </SmoothScrollProvider>
            </body>
        </html>
    );
}
