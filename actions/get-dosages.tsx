import { Dosage } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/dosages`;

const getDosages = async (): Promise<Dosage[]> => {
  const res = await fetch(URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

export default getDosages;
