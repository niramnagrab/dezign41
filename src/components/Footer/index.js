import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer>
    <div className="footer">
      <span className="footer__date">{`© ${new Date().getFullYear()} Dezign41.`}</span>
      All rights reserved.
    </div>
  </footer>
);

export default Footer;
