import React from 'react'
import styles from './top-menu.module.css'
import Link from 'next/link'

const TopMenu: React.FC = () => {
  const items: NavigatorItem[] = [
    { label: 'Supermarkets', link: '/supermarkets', key: 'supermarkets' },
    { label: 'Battle Royale', link: '/battle-royale', key: 'battle-royale' },
    { label: 'Comparator', link: '/comparator', key: 'comparator' },
  ]

  return (
    <header className={styles.header}>
      <Link href='/' className={styles.nav_item}>
        <h1 className={styles.application_title}>Price comparator</h1>
      </Link>
      <nav className={styles.nav_bar}>
        {items.map((item) => (
          <Link key={item.key} href={item.link} className={styles.nav_item}>
            <h3 >{item.label}</h3>
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default TopMenu

interface NavigatorItem {
  label: string
  link: string
  key: string
}
