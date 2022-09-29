import React from 'react'
import styles from '../Components/Navbar.module.css';


const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
        <div>
            <img src="https://lh3.googleusercontent.com/7NabP8N3VdnHYt17iVcUvF_Hr2lFg-ayg1YnYIrvtWCtt-RtrnwVUzLZRUT3DSg3IkZHGqEte1v-_E590aB_AC0uCA-xthGO0d1YAA=-rw" alt="" />
        </div>
        <div>
            <p>Privacy & Terms</p>
            <select>
                <option value="">United Kingdom</option>
                <option value="">India</option>
                <option value="">America</option>
            </select>
        </div>
        
    </div>
    <hr />
    <div className={styles.bottom}>
        <p>Share</p>
        <img src="https://lh3.googleusercontent.com/sw4rOkreSopt2DcXlOCH9HPwHm7pPgeBsO8DFqWnnVPifC4473ztUcLCT49kDnDj5c-ClaRCOQKmBvbrzqICFq7yNgcqq8-byBV0aw=-rw" alt="" />
        <img src="https://lh3.googleusercontent.com/O73TcAUC463DfCnA87ap5gw7uWPW2R6owA8p-jcmHYJuysd2BVT_W-1PzUdxk_kbzjQ-OHuTt4W1i3N4hi_KtCkBifUtpZFPlz4R=-rw" alt="" />
        <img src="https://lh3.googleusercontent.com/2PFoqNpZ5xu9JK1u_CRR0aiYqGb0K6cOKkzmS2Ux0rucddJgNeMwsniGFMzQWopCdNK9rBzq73N0188sAtK_UFpgUHPPgz2XyDG5=-rw" alt="" />
    </div>
    </>
  )
}

export default Footer