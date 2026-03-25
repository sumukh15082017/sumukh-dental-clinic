/*
  # Fix RLS policy for appointments table

  1. Security Changes
    - Replace overly permissive INSERT policy with validation
    - Add email and phone validation to prevent spam
    - Ensure appointment records contain valid data before insertion
*/

DROP POLICY IF EXISTS "Anyone can create appointments" ON appointments;

CREATE POLICY "Users can create appointments with valid data"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (
    patient_name IS NOT NULL AND
    patient_name != '' AND
    patient_email IS NOT NULL AND
    patient_email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$' AND
    patient_phone IS NOT NULL AND
    patient_phone != '' AND
    preferred_date IS NOT NULL AND
    preferred_time IS NOT NULL AND
    preferred_time != ''
  );