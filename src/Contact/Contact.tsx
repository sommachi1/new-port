import "../Contact/Contact.css"
import { motion } from "framer-motion";


const Contact: React.FC = () => {
  return (
   <motion.section className="contact" id="contact"
   initial={{ opacity: 0, x: -100 }}       // hidden (fade out + slide down)
  whileInView={{ opacity: 1, x: 0 }}    // visible (fade in + slide up)
  transition={{ duration: 0.8, ease: "easeOut" }} // animation timing
  viewport={{ once: true }}             // animates only once when visible
    
   >
  <h2 className="skill-h2">Contact <span>Me</span></h2>
  <p>I'm currently available for Front-End Web Development job positions, <br></br>either remote or hybrid, and any related freelancing opportunity <br></br>that I consider profitable to me.</p>

  <form action="https://formsubmit.co/mmesomaf140@gmail.com" method="POST">
    <div className="input-box">
      <input type="text" name="name" placeholder="Full Name" required/>
      <input type="email" name="email" placeholder="Email Address" required/>
    </div>

    <div className="input-box">
      <input type="text" name="phone" placeholder="Mobile Number"/>
      <input type="text" name="subject" placeholder="Email Subject"/>
    </div>

    <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>

    <input type="submit" value="Send Message" className="contact-btn"/>
  </form>
</motion.section>
  );
};

export default Contact;
