export interface User {
  current_page: number
  data: Daum[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Link[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: "string"
  to: number
  total: number
    id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
}


export interface Daum {
  id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
}

export interface Link {
  url?: string
  label: string
  active: boolean
}
