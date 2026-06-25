function Footer() {
  return (
    <footer>

      {/* Top footer section */}
      <div>

        {/* Column 1 - Hospital info */}
        <div>
          <h3>Makalu Everest Hospital</h3>
          <p>
            A multi-specialty healthcare institution located in Biratnagar, Nepal.
            Providing quality and affordable medical services to our community.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/appointment">Appointment</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h4>Our Services</h4>
          <ul>
            <li>Emergency & Trauma Care</li>
            <li>Outpatient & Inpatient Care</li>
            <li>Diagnostic Services</li>
            <li>Pharmacy</li>
            <li>Ambulance Services</li>
            <li>Vaccination & Immunization</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h4>Contact Us</h4>
          <p>Rangeli Road, Biratnagar, Nepal</p>
          <p>Phone: 970-2048048</p>
          <p>Email: info@makaluhospital.com</p>
          <p>Open: 24/7 Emergency Services</p>
        </div>

      </div>

      {/* Bottom footer */}
      <div>
        <p>
          &copy; {new Date().getFullYear()} Makalu Everest Hospital. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;