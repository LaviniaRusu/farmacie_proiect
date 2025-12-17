import { PharmaceuticalForm } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/pharmaceutical-form`;

const getPhamaceuticalForm = async (): Promise<PharmaceuticalForm[]> => {
  const res = await fetch(URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pharmaceutical form.");
  }

  return res.json();
};

export default getPhamaceuticalForm;
