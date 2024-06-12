import Style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={Style.foot}>
            <img src="./images/logo.png" alt="logo"></img>
            <div className={Style.elements}>
                <div className={Style.Product1}>
                    <span>Product</span>
                    <ul className={Style.Product}>
                        <li>Feature</li>
                        <li>Integrations</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className={Style.Company1}>
                    <span>Company</span>
                    <ul className={Style.Company}>
                        <li>Privacy</li>
                        <li>Terms and Services</li>
                    </ul>
                </div>
                <div className={Style.Developers1}>
                    <span>Developers</span>
                    <ul className={Style.Developers}>
                        <li>Documentation</li>
                        <li>Guide</li>
                    </ul>
                </div>
                <div>
                    <span>Social media</span>
                    <ul className={Style.Social}>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;