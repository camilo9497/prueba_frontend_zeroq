"use client";

import styles from "./offices.module.css";
import { Card } from "@/features/offices/card/card";
import { Search } from "@/features/offices/search/search";
import { Office } from "./offices/models/responses";
import { useState } from "react";
import { useOfficesApi } from "./offices/hooks/use-offices-api";



export const Offices = () => {
  const { offices, toggleOfficeStatus } = useOfficesApi()

  const [search, setSearch] = useState("");

  const handleChangeSearch = (value: string) => {
    setSearch(value);
  };

  const filterOffices = (office: Office) =>
    office.name.toLowerCase().includes(search.trim().toLowerCase());

  return (
    <>
      <Search search={search} onChange={handleChangeSearch} />
      <div className={styles.containerCards}>
        {offices.filter(filterOffices).map((office) => (
          <Card key={office.id} office={office} onClick={toggleOfficeStatus} />
        ))}
      </div>
    </>
  );
};
