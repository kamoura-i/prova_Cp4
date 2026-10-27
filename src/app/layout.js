import "./globals.css";
import { ContactsProvider } from "../app/contexts/ContactsContext";

export const metadata = {
  title: "Checkpoint 6 – Contatos",
  description: "useContext e hooks customizados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <ContactsProvider>
        <body>
          {children}
        </body>
      </ContactsProvider>

    </html>
  );
}