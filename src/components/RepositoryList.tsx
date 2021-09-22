import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

//https://api.github.com/orgs/rocketseat/repos

interface Repo {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repo[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(res => res.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1> Repository List </h1>
      <ul>
        {repositories.map(repo => {
          return <RepositoryItem key={repo.name} repository={repo} />
        })}
      </ul>
    </section>
  )
}
