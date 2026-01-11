-- Lab Info
INSERT INTO lab_info (lab_name, tagline, short_description, location, hero_image_url, contact_email)
VALUES (
  'UnderWater Acoustic Research Lab (UWARL)',
  'Exploring the Depths of Ocean Technology',
  'The UnderWater Acoustic Research Lab (UWARL) at SSN College of Engineering is a premier research facility dedicated to solving the complex challenges of the marine environment.',
  'SSN College of Engineering, Chennai, India',
  '/underwater-lab-research.jpg',
  'uwarl@ssn.edu.in'
);

-- PI Profile
INSERT INTO pi_profile (name, title, affiliation, bio_md, profile_image_url, google_scholar_url, linkedin_url)
VALUES (
  'Dr. S. Sakthivel Murugan',
  'Professor & Lab Director',
  'SSN College of Engineering',
  'Dr. S. Sakthivel Murugan has over 24 years of experience in Teaching and Research. He has established an exclusive underwater research lab (UWARL) and has completed funded projects worth over Rs. 230 Lakhs. His expertise spans underwater ambient noise analysis, bio-acoustics, and autonomous underwater vehicles.',
  '/pi-placeholder.jpg',
  'https://scholar.google.com',
  'https://linkedin.com'
);

-- Research Areas
INSERT INTO research_areas (title, slug, summary, icon, color) VALUES
('Ambient Noise Analysis', 'ambient-noise', 'Decoding the deep sea environment through advanced acoustic signal processing.', 'Waves', 'text-blue-400'),
('Acoustic Communication', 'acoustic-comm', 'Developing robust communication protocols for challenging underwater environments.', 'Cpu', 'text-teal-400'),
('Autonomous Vehicles', 'autonomous-vehicles', 'Designing and deploying AUVs and ROVs for ocean floor mapping and inspection.', 'Navigation', 'text-cyan-400'),
('Bio-Acoustics', 'bio-acoustics', 'Studying marine life through their acoustic signatures and behaviors.', 'Microscope', 'text-aqua-400'),
('Image Processing', 'image-processing', 'Enhancing clarity and visibility in turbid underwater imaging scenarios.', 'ImageIcon', 'text-indigo-400'),
('Sensor Networks', 'sensor-networks', 'Coordinated swarms of underwater sensors for large-scale data collection.', 'ShieldCheck', 'text-emerald-400');

-- Projects
INSERT INTO projects (title, status, sponsor, amount_lakhs, start_year, end_year, short_description, tags) VALUES
('Development of Underwater Wireless Sensor Network', 'ongoing', 'NRB/DRDO', 150, 2023, NULL, 'A large scale deployment of acoustic sensors for coastal monitoring.', ARRAY['sensors', 'communication']),
('Characterization of Ambient Noise in Chennai Coast', 'completed', 'NIOT', 80, 2019, 2021, 'Extensive study on the shipping noise impact on marine mammals.', ARRAY['ambient-noise', 'bio-acoustics']),
('Acoustic Modem Design for Shallow Water', 'ongoing', 'DST', 120, 2022, NULL, 'High data rate communication using MIMO technology.', ARRAY['communication', 'hardware']);

-- Publications
INSERT INTO publications (title, authors, venue, year, doi, link, type, highlight) VALUES
('Analysis of Ambient Noise in Shallow Waters of Bay of Bengal', 'S. Sakthivel Murugan, et al.', 'IEEE Journal of Oceanic Engineering', 2023, '10.1109/JOE.2023', NULL, 'journal', true),
('Deep Learning Based Underwater Image Enhancement', 'Mary Cecilia, S. Sakthivel Murugan', 'International Conference on Signal Processing', 2022, NULL, NULL, 'conference', false),
('Bio-Acoustic Signal Classification Using CNN', 'Swathi, S. Sakthivel Murugan', 'Marine Technology Society Journal', 2023, '10.4031/MTSJ.2023', NULL, 'journal', false);

-- Students
INSERT INTO students (name, level, thesis_title, status, year, profile_image_url) VALUES
('Dr. Mary Cecilia', 'PhD', 'Underwater Image Enhancement', 'completed', 2021, NULL),
('Dr. Swathi', 'PhD', 'Bio-Acoustic Classification', 'completed', 2022, NULL),
('Annalakshmi', 'PhD', 'Ambient Noise Modeling', 'ongoing', 2024, NULL),
('Rahul', 'PG', 'ROV Control Systems', 'ongoing', 2024, NULL),
('Priya', 'UG', 'Sensor Swarm Design', 'ongoing', 2025, NULL);

-- Facilities
INSERT INTO facilities (name, description, specs_md, image_url, category) VALUES
('Acoustic Test Tank', 'A specialized laboratory tank for simulating deep-sea pressure and testing acoustic transducers.', '<ul><li>Dimensions: 5m x 3m x 2m</li><li>Precision hydrophone positioning</li><li>Automated data logging</li></ul>', '/tank-placeholder.jpg', 'tank'),
('Autonomous ROV "Explorer"', 'Remotely operated vehicle capable of diving up to 100 meters for visual and acoustic inspection.', '<ul><li>Live HD video feed</li><li>4-hour battery life</li><li>Obstacle avoidance sensors</li></ul>', '/rov-placeholder.jpg', 'vehicles'),
('Underwater Hydrophone Arrays', 'Multi-element sensors for ambient noise collection and signal localization.', '<ul><li>Frequency range: 10Hz - 50kHz</li><li>High sensitivity</li><li>Titanium casing</li></ul>', '/hydrophone-placeholder.jpg', 'sensors');

-- Gallery Items
INSERT INTO gallery_items (title, caption, image_url, category) VALUES
('Ocean Sea Trial 2023', 'Field testing of underwater sensors', '/gallery-1.jpg', 'sea_trials'),
('Lab Team Meeting', 'Weekly research discussion', '/gallery-2.jpg', 'students'),
('Underwater ROV Testing', 'Testing autonomous navigation', '/gallery-3.jpg', 'lab'),
('Guest Lecture: Dr. John Doe', 'Special talk on marine robotics', '/gallery-4.jpg', 'visitors'),
('Coastal Data Collection', 'Gathering ambient noise data', '/gallery-5.jpg', 'sea_trials'),
('Student Workshop', 'Training on signal processing', '/gallery-6.jpg', 'students');
