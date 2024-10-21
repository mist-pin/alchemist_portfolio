import styles from "./css/contact_page.module.css"

const Contact = () => {
  return (
    <main className={styles.main} id='contact'>
        <section className={styles.form_section}>
            <h1 className={styles.headding}>Contact Me</h1>
            <form className={styles.form}>
                <div className={styles.label_input_holder} >
                    <label className={styles.lable} for="name">Name</label>
                    <input className={styles.input_field} type="text" id="name" name="name" required/>
                </div>

                <div className={styles.label_input_holder} >
                    <label className={styles.lable} for="email">Email</label>
                    <input className={styles.input_field} type="email" id="email" name="email" required/>
                </div>

                <div className={styles.label_input_holder} >
                    <label className={styles.lable} for="subject">Subject</label>
                    <input className={styles.input_field} type="text" id="subject" name="subject" required/>
                </div>

                <div className={styles.label_input_holder} >
                    <label className={styles.lable} for="message">Message</label>
                    <textarea className={`${styles.input_field} ${styles.text_field}`} id="message" name="message" rows="5" required></textarea>
                </div>

                <button className={styles.submit} type="submit">Submit</button>
            </form>
        </section>
    </main>
  );
};

export default Contact;
