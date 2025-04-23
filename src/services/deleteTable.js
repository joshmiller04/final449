import { supabase } from './supabaseclient';

export const DeleteTable = async () => {
  const { data, error } = await supabase
    .from("big_ten_2025_schedule")
    .delete()
    .neq('id', 0);

  if (error) {
    console.error('Error deleting table rows:', error);
    return { error };
  }

  console.log('All rows deleted:', data);
  return { data };
};