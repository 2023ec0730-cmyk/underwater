import useSWR from 'swr'
import { supabase } from '@/lib/supabaseClient'
import type {
  LabInfo,
  PIProfile,
  ResearchArea,
  Project,
  Publication,
  Student,
  Facility,
  Event,
} from '@/types/database'

// Generic fetcher for Supabase
const fetcher = async <T,>(table: string): Promise<T[]> => {
  const { data, error } = await supabase.from(table).select('*')
  if (error) throw error
  return (data as T[]) || []
}

const fetcherSingle = async <T,>(table: string): Promise<T | null> => {
  const { data, error } = await supabase.from(table).select('*').single()
  if (error) throw error
  return (data as T) || null
}

// Lab Info Hook
export function useLabInfo() {
  const { data, error, isLoading } = useSWR<LabInfo | null>('lab_info', () => fetcherSingle<LabInfo>('lab_info'))
  return { labInfo: data, error, isLoading }
}

// PI Profile Hook
export function usePIProfile() {
  const { data, error, isLoading } = useSWR<PIProfile | null>('pi_profile', () =>
    fetcherSingle<PIProfile>('pi_profile')
  )
  return { piProfile: data, error, isLoading }
}

// Research Areas Hook
export function useResearchAreas() {
  const { data, error, isLoading } = useSWR<ResearchArea[]>('research_areas', () =>
    fetcher<ResearchArea>('research_areas')
  )
  return { researchAreas: data || [], error, isLoading }
}

// Projects Hook
export function useProjects() {
  const { data, error, isLoading } = useSWR<Project[]>('projects', () => fetcher<Project>('projects'))
  return { projects: data || [], error, isLoading }
}

// Publications Hook
export function usePublications() {
  const { data, error, isLoading } = useSWR<Publication[]>('publications', () => fetcher<Publication>('publications'))
  return { publications: data || [], error, isLoading }
}

// Students Hook
export function useStudents() {
  const { data, error, isLoading } = useSWR<Student[]>('students', () => fetcher<Student>('students'))
  return { students: data || [], error, isLoading }
}

// Facilities Hook
export function useFacilities() {
  const { data, error, isLoading } = useSWR<Facility[]>('facilities', () => fetcher<Facility>('facilities'))
  return { facilities: data || [], error, isLoading }
}

// Gallery Items Hook
export function useGalleryItems() {
  const { data, error, isLoading } = useSWR<any[]>('gallery_items', () => fetcher<any>('gallery_items'))
  return { galleryItems: data || [], error, isLoading }
}
