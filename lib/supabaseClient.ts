import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://oyjwqtpkznakbnbqucji.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95andxdHBrem5ha2JuYnF1Y2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1NjYyODAsImV4cCI6MjA4MzE0MjI4MH0.unozwteJU8uoz26lMawz6ALG_m1b3MJ73_IQc9hqw6I"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
