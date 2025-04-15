import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://chukabbzesatonmfhyym.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNodWthYmJ6ZXNhdG9ubWZoeXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1ODQ3MzUsImV4cCI6MjA1ODE2MDczNX0.tD8SqD6Pyvs_0vtLVsLVjYg5qi6hbq-LH-e6KgBoImU';
export const supabase = createClient(supabaseUrl, supabaseKey);
