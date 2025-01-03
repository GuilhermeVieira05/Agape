import styles from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <ul className={styles.socialLinks}>
                    <li className={styles.linkItem}>
                        <a href="https://www.instagram.com/guilherme-vieira" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                            Instagram
                        </a>
                    </li>
                    <li className={styles.linkItem}>
                        <a href="https://github.com/guilherme-vieira" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                            GitHub
                        </a>
                    </li>
                    <li className={styles.linkItem}>
                        <a href="mailto:guilherme.vieira@email.com">
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                            Email
                        </a>
                    </li>
                </ul>
                <p>&copy; 2024 Guilherme Vieira - Todos os direitos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;