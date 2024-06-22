import Style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={Style.foot}>
            <img src="./images/logo.png" alt="logo"></img>
            <div className={Style.elements}>
                <div className={Style.cont}>
                    <span>Product</span>
                    <ul className={Style.ulItem}>
                        <li>Feature</li>
                        <li>Integrations</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className={Style.cont}>
                    <span>Company</span>
                    <ul className={Style.ulItem}>
                        <li>Privacy</li>
                        <li>Terms and Services</li>
                    </ul>
                </div>
                <div className={Style.cont}>
                    <span>Developers</span>
                    <ul className={Style.ulItem}>
                        <li>Documentation</li>
                        <li>Guide</li>
                    </ul>
                </div>
                <div className={Style.cont}>
                    <span>Social media</span>
                    <ul className={Style.ulItem}>
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