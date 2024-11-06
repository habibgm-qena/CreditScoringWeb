import CreditScoringGraph from '@/components/creditScoringGraph/creditScoringGraph'
import styles from '@/styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.container} style={{ backgroundColor: '#f0f4f8' }}>
      <CreditScoringGraph />
    </div>
  )
}
