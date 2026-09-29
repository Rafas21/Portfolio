import { ExternalLink, FolderGit2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { projectCategories, projects } from '@/data/projects'
import { site } from '@/data/site'
import { useLanguage } from '@/hooks/useLanguage'
import type { Project, ProjectCategory } from '@/types'
import { cn } from '@/utils/cn'
import { GithubIcon } from './ui/BrandIcons'
import { Card } from './ui/Card'
import { Placeholder } from './ui/Placeholder'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { Tag } from './ui/Tag'

type Filter = ProjectCategory | 'all'

function ProjectCard({ project }: { project: Project }) {
  const { t, l } = useLanguage()
  return (
    <Card className="group flex h-full flex-col p-6 hover:border-border-strong">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-10 place-items-center rounded-lg border border-border bg-elevated text-accent">
          <FolderGit2 className="size-5" aria-hidden />
        </span>
        <div className="flex items-center gap-1">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.projects.code}: ${project.name}`}
              className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-elevated hover:text-fg"
            >
              <GithubIcon className="size-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.projects.demo}: ${project.name}`}
              className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-elevated hover:text-fg"
            >
              <ExternalLink className="size-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{l(project.description)}</p>
      <dl className="mt-5 space-y-3 text-sm">
        <div>
          <dt className="font-mono text-xs text-subtle uppercase">{t.projects.problem}</dt>
          <dd className="mt-1 text-muted">{l(project.problem)}</dd>
        </div>
        {project.architecture && (
          <div>
            <dt className="font-mono text-xs text-subtle uppercase">{t.projects.architecture}</dt>
            <dd className="mt-1 font-mono text-xs leading-relaxed text-fg">{l(project.architecture)}</dd>
          </div>
        )}
      </dl>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )
  const filters: Filter[] = ['all', ...projectCategories]

  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro}>
      <div role="group" aria-label={t.projects.filterLabel} className="mb-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              'shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors',
              filter === f
                ? 'border-fg bg-fg text-bg'
                : 'border-border text-muted hover:border-border-strong hover:text-fg',
            )}
          >
            {f === 'all' ? t.projects.all : t.projects.categories[f]}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.04}>
            <ProjectCard project={project} />
          </Reveal>
        ))}

        {projects.length === 0 &&
          site.showPlaceholders &&
          [1, 2, 3].map((n) => (
            <Placeholder key={n} file="src/data/projects.ts" title={`Projeto ${n}`} className="min-h-56">
              Nome, descrição, problema resolvido, arquitetura, tecnologias, link do GitHub e demo.
            </Placeholder>
          ))}

        {projects.length > 0 && filtered.length === 0 && (
          <p className="col-span-full rounded-xl border border-dashed border-border py-12 text-center text-sm text-muted">
            {t.projects.empty}
          </p>
        )}
      </div>
    </Section>
  )
}
