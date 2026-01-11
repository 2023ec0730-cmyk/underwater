export interface LabInfo {
  id: string
  lab_name: string
  tagline: string
  short_description: string
  location: string
  hero_image_url: string
  contact_email: string
}

export interface PIProfile {
  id: string
  name: string
  title: string
  affiliation: string
  bio_md: string
  profile_image_url: string
  google_scholar_url: string
  linkedin_url: string
}

export interface ResearchArea {
  id: string
  title: string
  slug: string
  summary: string
  icon: string
  color: string
}

export interface Project {
  id: string
  title: string
  status: "ongoing" | "completed"
  sponsor: string
  amount_lakhs: number
  start_year: number
  end_year?: number
  short_description: string
  tags: string[]
  pi_id: string
  link?: string
}

export interface Publication {
  id: string
  title: string
  authors: string
  venue: string
  year: number
  doi?: string
  link?: string
  type: "journal" | "conference" | "book"
  highlight: boolean
}

export interface Student {
  id: string
  name: string
  level: "UG" | "PG" | "PhD"
  thesis_title?: string
  status: "ongoing" | "completed"
  year: number
  profile_image_url?: string
}

export interface Facility {
  id: string
  name: string
  description: string
  specs_md: string
  image_url: string
  category: "tank" | "sensors" | "vehicles" | "computing" | "other"
}

export interface Event {
  id: string
  title: string
  type: "talk" | "workshop" | "cruise" | "field-trip"
  location: string
  start_date: string
  end_date: string
  description: string
  banner_image_url: string
}
