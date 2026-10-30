import styles from '../../styles/Home.module.css'

const CONTACT_PERSON = {
  name: 'Majvi Larsson',
  phone: '076-584 04 43',
  email: 'majvi@accessdenied.nu',
}

export const ContactDetails = ({ className }) => (
  <p className={className}>
    <strong>{CONTACT_PERSON.name}</strong>, {CONTACT_PERSON.phone},{' '}
    <a href={`mailto:${CONTACT_PERSON.email}`}>{CONTACT_PERSON.email}</a>
  </p>
)

const ContactFooter = () => (
  <footer className={styles.footer}>
    Styrelsen genom: {CONTACT_PERSON.name}, tel. {CONTACT_PERSON.phone}
  </footer>
)

export default ContactFooter
