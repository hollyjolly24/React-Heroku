import React from 'react';
import footerStyles from './profileFooter.module.css';
import history from "../../history/history"
import { Link } from 'react-router-dom';
//import DOMPurify from 'dompurify';
//<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(dirtyContent) }} />

export default function profileFooter() {
    return (
        <footer className={footerStyles.footer}>
            <Link to='/profileTerms' className={footerStyles.terms} onclick={() => history.push("/profileTerms")}>
                Terms
            </Link>  

            <Link to='/profilePrivacy' className={footerStyles.privacy} onclick={() => history.push("/profilePrivacy")}>
                Privacy Policy    
            </Link>

            <Link to='/profileContactUs' className={footerStyles.contact} onclick={() => history.push("/profileContactUs")}>
                Contact Us
            </Link>  

        </footer>
    )
}

