'use client'
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase"
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Spinner} from "@nextui-org/react";

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
    return <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>;
  }
  

  return (
      <Table aria-label="TP Sounds table" className="purple-dark text-foreground bg-background" >
      <TableHeader>
        <TableColumn>Sound Name</TableColumn>
        <TableColumn>Times Played</TableColumn>
      </TableHeader>
      <TableBody>
        { soundCounts?.map( (soundData) => (
          <TableRow key={soundData.sound_name}>
            <TableCell>{soundData.sound_name}</TableCell>
            <TableCell>{soundData.times_played}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
  )
}


