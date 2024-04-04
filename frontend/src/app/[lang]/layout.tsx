"use client";

import "./globals.css";
import LocaleSwitcher from "./components/locale-switcher";
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/client";

export default function RootLayout({
  children,
  params,
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
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
