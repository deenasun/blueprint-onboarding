import { IoArrowBack } from 'react-icons/io5';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../app/styles.module.css';
import bpImage from '../assets/images/bp-logo.png';

export default function NavBar({ showBack }: { showBack?: boolean }) {
  const router = useRouter();

  return (
    <div className={styles.navBar}>
      {showBack && (
        <div className={styles.backButton} onClick={() => router.push('/')}>
          <IoArrowBack />
        </div>
      )}
      <div className={styles.bpLogo}>
        <Image src={bpImage} width={30} height={30} alt="logo" />
        blueprint blog
      </div>
    </div>
  );
}
