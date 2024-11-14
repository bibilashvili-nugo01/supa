import supabase from "./supabase";

export const getAllManDress = async () => {
  let { data: man, error } = await supabase.from("man").select("*");

  console.log(man, error);

  return { man, error };
};

export const insertManDress = async (add) => {
  const { data, error } = await supabase.from("man").insert([add]).select();

  return { data, error };
};
