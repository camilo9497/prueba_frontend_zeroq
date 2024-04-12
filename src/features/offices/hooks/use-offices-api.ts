import { useFetcher } from "@/hooks/use-fetcher";
import { useEffect, useState } from "react";
import { Office, OfficesResponse } from "../models/responses";

export const useOfficesApi = () => {
  const { fetcher } = useFetcher();
  const [offices, setOffices] = useState<Office[]>([]);

  const toggleOfficeStatus = (id:number) => {
    const newOffices = [...offices]
    const index = newOffices.findIndex((office)=> office.id === id )
    newOffices[index].online = !newOffices[index].online
    setOffices(newOffices)
  }

  const getOffices = () => {
    fetcher<OfficesResponse>("/api/offices").then((officesResponse) =>
      setOffices(officesResponse.offices)
    );
  };

  useEffect(() => {
    getOffices();

    const intervalId = setInterval(() => {
      getOffices();
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    offices,
    toggleOfficeStatus
  };
};
