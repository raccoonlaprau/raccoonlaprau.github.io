'use client'
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase"

export default function TrashPandaStats() {
  const [soundCounts, setSoundCounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSounds = async () => {
    try {
     setLoading(true);
     const { data, error } = await supabase
       .from("tp-sounds")
       .select("*")

     if (error) throw error;
     setSoundCounts(data);
   } catch (error : any) {
     alert(error.message);
   } finally {
     setLoading(false);
   }
}

  useEffect(() => {
    fetchSounds();
  }, []);

  if (loading) {
    return <div>Fetching data...</div>;
  }

  return (
    <div>
      { soundCounts?.map( (soundData) => (
        <p key={soundData.sound_name}>{soundData.sound_name} played {soundData.times_played} times.</p>
      ))}
    </div>
  )
}


