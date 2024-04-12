import { Offices } from "@/features/offices";

interface OfficeLine {
  waiting: number;
  elapsed: number;
}

export interface Office {
  id: number;
  name: string;
  online: boolean;
  lines: OfficeLine[];
}

export interface OfficesResponse {
  offices: Office[]
}