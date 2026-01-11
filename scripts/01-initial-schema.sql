-- 1. Lab Info Table
CREATE TABLE lab_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lab_name TEXT NOT NULL,
  tagline TEXT,
  short_description TEXT,
  location TEXT,
  hero_image_url TEXT,
  contact_email TEXT
);

-- 2. PI Profile Table
CREATE TABLE pi_profile (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  title TEXT,
  affiliation TEXT,
  bio_md TEXT,
  profile_image_url TEXT,
  google_scholar_url TEXT,
  linkedin_url TEXT
);

-- 3. Research Areas Table
CREATE TABLE research_areas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  summary TEXT,
  icon TEXT,
  color TEXT
);

-- 4. Projects Table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  status TEXT CHECK (status IN ('ongoing', 'completed')),
  sponsor TEXT,
  amount_lakhs DECIMAL,
  start_year INTEGER,
  end_year INTEGER,
  short_description TEXT,
  tags TEXT[],
  pi_id UUID REFERENCES pi_profile(id),
  link TEXT
);

-- 5. Publications Table
CREATE TABLE publications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  authors TEXT NOT NULL,
  venue TEXT,
  year INTEGER,
  doi TEXT,
  link TEXT,
  type TEXT CHECK (type IN ('journal', 'conference', 'book')),
  highlight BOOLEAN DEFAULT false
);

-- 6. Students Table
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  level TEXT CHECK (level IN ('UG', 'PG', 'PhD')),
  thesis_title TEXT,
  status TEXT CHECK (status IN ('ongoing', 'completed')),
  year INTEGER,
  profile_image_url TEXT
);

-- 7. Facilities Table
CREATE TABLE facilities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  specs_md TEXT,
  image_url TEXT,
  category TEXT CHECK (category IN ('tank', 'sensors', 'vehicles', 'computing', 'other'))
);

-- 8. Gallery Items Table
CREATE TABLE gallery_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  caption TEXT,
  image_url TEXT NOT NULL,
  category TEXT CHECK (category IN ('lab', 'sea_trials', 'visitors', 'students')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (Security)
ALTER TABLE lab_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE pi_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE facilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

-- Create Policies for Public Read-Only Access
CREATE POLICY "Public Read Access" ON lab_info FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON pi_profile FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON research_areas FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON projects FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON publications FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON students FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON facilities FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON gallery_items FOR SELECT USING (true);
