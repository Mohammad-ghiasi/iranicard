export type faqs = faq[]

export interface faq {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  coinName?: string
  faqCategory?: FaqCategory
  faqType: FaqType
  question: Question[]
  metaData: string
}

export interface FaqCategory {
  id: number
  documentId: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
}

export interface FaqType {
  id: number
  documentId: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Question {
  __component: string
  id: number
  question: string
  answer: string
}
