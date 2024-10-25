'use client'

import { useState } from "react";

import styles from "./css/contact_page.module.css"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const do_submit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.log(error);
            alert('Error:', error);
        }
    }

    return (
        <main className={styles.main} id='contact'>
            <section className={styles.form_section}>
                <h1 className={styles.headding}>Contact Me</h1>
                <form className={styles.form} onSubmit={do_submit}>
                    <div className={styles.label_input_holder} >
                        <label className={styles.lable} for="name">Name</label>
                        <input className={styles.input_field} type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                    </div>

                    <div className={styles.label_input_holder} >
                        <label className={styles.lable} for="email">Email</label>
                        <input className={styles.input_field} type="email" id="email" name="email" value={formData.email} onChange={handleChange}  required/>
                    </div>

                    <div className={styles.label_input_holder} >
                        <label className={styles.lable} for="subject">Subject</label>
                        <input className={styles.input_field} type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}  required/>
                    </div>

                    <div className={styles.label_input_holder} >
                        <label className={styles.lable} for="message">Message</label>
                        <textarea className={`${styles.input_field} ${styles.text_field}`} id="message" name="message" rows="5" value={formData.message} onChange={handleChange}  required></textarea>
                    </div>

                    <button className={styles.submit} type="submit">Submit</button>
                </form>
            </section>
        </main>
    );
};

export default Contact;
