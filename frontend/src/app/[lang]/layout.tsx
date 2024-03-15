import "./globals.css";
import LocaleSwitcher from "./components/locale-switcher";

export default function RootLayout({
  children,
  params
}: {
  readonly children: React.ReactNode;
  readonly params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className="bg-slate-100">
        <header className="m-4">
          <LocaleSwitcher />
        </header>
        {children}
      </body>
    </html>
  );
}
