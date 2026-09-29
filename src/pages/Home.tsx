import { useEffect, type ComponentType } from 'react'
import { About } from '@/components/About'
import { Architecture } from '@/components/Architecture'
import { Certifications } from '@/components/Certifications'
import { Contact } from '@/components/Contact'
import { Education } from '@/components/Education'
import { Experience } from '@/components/Experience'
import { GitHub } from '@/components/GitHub'
import { Hero } from '@/components/Hero'
import { Infrastructure } from '@/components/Infrastructure'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { MainLayout } from '@/layouts/MainLayout'
import { visibleSections, type SectionId } from '@/utils/sections'

const sectionComponents: Record<SectionId, ComponentType> = {
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  engineering: Architecture,
  infrastructure: Infrastructure,
  education: Education,
  certifications: Certifications,
  github: GitHub,
  contact: Contact,
}

export default function Home() {
  // O conteúdo é renderizado após o carregamento: reaplica o scroll para links diretos (/#contact).
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <MainLayout>
      <Hero />
      {visibleSections.map((id) => {
        const Component = sectionComponents[id]
        return <Component key={id} />
      })}
    </MainLayout>
  )
}
