import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-8">
        <h3>Contact us</h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
