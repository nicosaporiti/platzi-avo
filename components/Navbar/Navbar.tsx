import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav>
      <menu>
        <div className={styles.menu}>
          <Link href="/">
            <a className={styles.logo}>
              🥑 AVO<strong>STORE</strong>
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.logo}>🧺 Canasta (0)</a>
          </Link>
        </div>
      </menu>
    </nav>
  )
}
