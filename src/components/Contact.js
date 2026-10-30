import styles from '../../styles/Home.module.css'

const CONTACT_PERSONS = [
  {
    name: 'Majvi Larsson',
    phone: '076-584 04 43',
    email: 'majvi@accessdenied.nu',
  },
  {
    name: 'Anna Skagersten',
    phone: '073-652 11 66',
    email: 'skagersten1@outlook.com',
  },
]

export const ContactDetails = ({ className }) => (
  <p className={className}>
    {CONTACT_PERSONS.map((contact, index) => (
      <span key={contact.email}>
        <strong>{contact.name}</strong>, {contact.phone},{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        {index < CONTACT_PERSONS.length - 1 && <br/>}
      </span>
    ))}
  </p>
)

const ContactFooter = () => (
  <footer className={styles.footer}>
    Styrelsen genom:{' '}
    {CONTACT_PERSONS.map((contact, index) => (
      <span key={contact.email}>
        {index > 0 && ', '}{contact.name}, tel. {contact.phone}
      </span>
    ))}
  </footer>
)

export default ContactFooter
