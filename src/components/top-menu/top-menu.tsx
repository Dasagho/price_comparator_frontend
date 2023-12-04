import React from 'react'
import styles from './top-menu.module.css'
import Link from 'next/link'

const TopMenu: React.FC = () => {
  const items: NavigatorItem[] = [
    { label: 'Supermarkets', link: '/supermarkets' },
    { label: 'Battle Royale', link: '/battle-royale' },
    { label: 'Comparator', link: '/comparator' },
  ]

  return (
    <div className={styles.nav_bar}>
      <h1 className={styles.application_title}>Price comparator</h1>
      {items.map((item) => (
        <Link href={item.link}>
          <h3 className={styles.nav_item}>{item.label}</h3>
        </Link>
      ))}
    </div>
  )
}

export default TopMenu

interface NavigatorItem {
  label: string
  link: string
}
