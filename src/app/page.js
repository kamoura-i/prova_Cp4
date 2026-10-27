"use client";

import { useContactsContext } from "../app/contexts/ContactsContext"; // ERRO 1
import { useFilter } from "../app/hooks/useFilter"; // ERRO 2
import { useStatistics } from "../app/hooks/useStatistics"; // ERRO 3
import FilterInput from "./components/FilterInput";
import Statistics from "../app/components/Statistics"; // ERRO 4
import ContactList from "./components/ContactList";

export default function HomePage() {
  const { contacts, loading, error } = useContactsContext();
  const { query, setQuery, filteredContacts } = useFilter(contacts);
  const stats = useStatistics(filteredContacts);

  if (loading) return <p>Carregando contatos...</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <h1>Contatos</h1>
      <FilterInput value={query} onChange={setQuery} />
      <Statistics total={stats.total} filtered={stats.filtered} />
      <ContactList contacts={filteredContacts} />
    </main>
  );
}