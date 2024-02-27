import { FC } from "react";
import { FooterStyle, NavLinkStyle, NavStyle, BlockSocialStyle } from "./FooterStyle";
import facebook from './../../icons/facebook_icon.png';
import twiter from './../../icons/twiter_icon.png';
import instagram from './../../icons/instagram_icon.png';
import telegram from './../../icons/telegram_icon.png';

const Footer: FC = () => {
    return (
        <FooterStyle>
            <div>
                <NavStyle>
                    <ul>
                        <li><NavLinkStyle to="/">Головна</NavLinkStyle></li>
                        <li><NavLinkStyle to="/about">Про нас</NavLinkStyle></li>
                        <li><NavLinkStyle to="/services">Послуги</NavLinkStyle></li>
                        <li><NavLinkStyle to="/contact">Контакти</NavLinkStyle></li>
                    </ul>
                </NavStyle>
                <BlockSocialStyle>
                    <p>We are in social networks:</p>
                    <div>
                        <a href="https://facebook.com/example" target="_blank">
                            <img src={facebook} />
                        </a>
                        <a href="https://twitter.com/example" target="_blank">
                            <img src={twiter} />
                        </a>
                        <a href="https://instagram.com/example" target="_blank">
                            <img src={instagram} />
                        </a>
                        <a href="https://t.me/your_telegram_channel_or_username" target="_blank">
                            <img src={telegram} />
                        </a>
                    </div>
                </BlockSocialStyle>
            </div>
            <div>
                <span>&copy; 2024 RSS-777.&nbsp;&nbsp; All rights reserved</span>
            </div>
        </FooterStyle>
    )
}

export default Footer;