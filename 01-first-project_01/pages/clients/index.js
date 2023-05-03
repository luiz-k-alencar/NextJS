// import styles from './about.module.css'

import Link from "next/link";

const ClientsPage = (props) => {
  const clients = [
    { id: "luiz", name: "Luiz" },
    { id: "bianca", name: "Bianca" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientsPage;
