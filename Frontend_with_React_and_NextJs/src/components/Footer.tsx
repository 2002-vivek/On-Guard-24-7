import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return(
        <footer className={styles.footer_section}>
            <div className={styles.footer_container}>
                {/* About column */}
                <div className={styles.footer_column}>
                    <h3>About</h3>
                    <ul>
                        <li><Link href='/'>Our Story</Link></li>
                        <li><Link href='/'>Mission & Vision</Link></li>
                        <li><Link href='/'>Leadership</Link></li>
                        <li><Link href='/'>Careers</Link></li>
                    </ul>
                </div>

                {/* Services column */}

                <div className={styles.footer_column}>
                <h3>Services</h3>
                    <ul>
                        <li><Link href='/'>Residential Security</Link></li>
                        <li><Link href='/'>Site Security</Link></li>
                        <li><Link href='/'>Event Security</Link></li>
                        <li><Link href='/'>Monitering</Link></li>
                    </ul>
                </div>


                {/* Products Column */}

                <div className={styles.footer_column}>
                <h3>Products</h3>
                    <ul>
                        <li><Link href='/'>Cameras</Link></li>
                        <li><Link href='/'>Alarms</Link></li>
                        <li><Link href='/'>Locks</Link></li>
                        <li><Link href='/'>Systems</Link></li>
                    </ul>
                </div>

                {/* Terms&conditions */}
                <div className={styles.footer_column}>
                <h3>Terms & Conditions</h3>
                    <ul>
                        <li><Link href='/'>Privacy Policy</Link></li>
                        <li><Link href='/'>Terms of Use</Link></li>
                        <li><Link href='/'>Cookie Policy</Link></li>
                        <li><Link href='/'>Refund Policy</Link></li>
                    </ul>
                </div>

            </div>

            <div className={styles.footer_bottom}>
                <p>© 2024 ON GUARD 24/7. All Rights Reserved.</p>
            </div>

        </footer>
    )
}
