/*
  # Create appointments table for Sumukh Dental Clinic

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `patient_name` (text, required)
      - `patient_email` (text, required)
      - `patient_phone` (text, required)
      - `preferred_date` (date, required)
      - `preferred_time` (text, required)
      - `treatment_type` (text, optional)
      - `message` (text, optional)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `appointments` table
    - Add policy for anyone to insert appointments (public booking)
    - Add policy for authenticated users to view all appointments (admin access)
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  patient_email text NOT NULL,
  patient_phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  treatment_type text,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);