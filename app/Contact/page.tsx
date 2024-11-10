import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StyleCss from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={StyleCss.contactContainer}>
        <h1 className={StyleCss.contactHeader}>Contact Us</h1>

        <div className={StyleCss.contactFormContainer}>
          <div className={StyleCss.formSection}>
            <h2>Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className={StyleCss.formInputLabel}>
                  Name
                </label>
                <input type="text" id="name" className={StyleCss.formInput} />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className={StyleCss.formInputLabel}>
                  Email
                </label>
                <input type="email" id="email" className={StyleCss.formInput} />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className={StyleCss.formInputLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={StyleCss.formInput}
                ></textarea>
              </div>

              <button type="submit" className={StyleCss.submitBtn}>
                Submit
              </button>
            </form>
          </div>

          <div className={StyleCss.contactInfoSection}>
            <h2 className={StyleCss.contactInfoHeader}>Contact Information</h2>

            <div className={StyleCss.contactInfoItem}>
              <h3 className={StyleCss.contactInfoLabel}>Phone</h3>
              <p className={StyleCss.contactInfoDetails}>+1 (123) 456-7890</p>
            </div>

            <div className={StyleCss.contactInfoItem}>
              <h3 className={StyleCss.contactInfoLabel}>Email</h3>
              <p className={StyleCss.contactInfoDetails}>zku@gmail.com</p>
            </div>

            <div className={StyleCss.contactInfoItem}>
              <h3 className={StyleCss.contactInfoLabel}>Address</h3>
              <p className={StyleCss.contactInfoDetails}>
                Future colony Street 1, Karachi, Pakistan
              </p>
            </div>

            <div className={StyleCss.contactInfoItem}>
              <h3 className={StyleCss.contactInfoLabel}>Follow Us</h3>
              <div className={StyleCss.followUs}>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
              </div>
            </div>

            <div className={StyleCss.mapContainer}>
              <h3 className={StyleCss.contactInfoLabel}>Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                allowFullScreen
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
