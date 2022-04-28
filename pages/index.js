import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/exd/list">
        <a>Go List Page!</a>
      </Link>
    </div>
  );
}
