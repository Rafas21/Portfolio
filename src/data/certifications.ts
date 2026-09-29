import type { Certification } from '@/types'

/**
 * Certificações. A seção fica oculta no site publicado enquanto a lista estiver vazia.
 * TODO(LinkedIn): adicionar certificações existentes, com link de validação quando houver.
 *
 * Modelo:
 * { name: 'Nome', issuer: 'Emissor', date: '2025-06', credentialUrl: 'https://...', credentialId: '...' },
 */
export const certifications: Certification[] = []
