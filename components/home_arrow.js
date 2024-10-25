'use client'

import { useContext, useRef, useEffect} from 'react';

import styles from "./css/home_arrow.module.css";
import { NavContext } from "@/app/layout";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export default function AnimatedArrow(){
    const {set_nav_visible, set_enable_nav} = useContext(NavContext)
    const main_ref = useRef()
    const {contextSafe} = useGSAP({scope:main_ref})

    useEffect(()=>{gsap.registerPlugin(useGSAP);}, [])

    const button_drop_on_click = contextSafe(()=>{
        /**
         * on clicking the drop button the a animation should take place
         * at the end set the navigation bar visible and set session storage to set navigation one-time
         */

        const button_tl = gsap.timeline({
            ease:'none',
            onComplete:()=>{
                set_nav_visible(true);
                sessionStorage.setItem('button_used', 'yes')
            }
        });
        button_tl.to(main_ref.current, {transformOrigin:"5% 50%", rotate:-170, zIndex:200, onComplete:()=>document.querySelector(".arrow").innerHTML=""})
        button_tl.to('.arrow', {backgroundColor:"gray",}, "<")
        button_tl.to('.arrow', {x:()=>window.innerWidth, scale:3, borderColor:'transparent', duration:.5, onComplete:()=>{
            const explode_tl = gsap.timeline({ease:"none"});
            explode_tl.to('.arrow', {scale:15, duration:.2, onComplete:()=>set_enable_nav(true)});
            explode_tl.to('.arrow', {opacity:0});
        }});
        button_tl.to(main_ref.current, {ease:'power3.out',x:400, y:29, background:'#0000', borderColor:'#0000',},'-=.5')
        button_tl.to(main_ref,{display:'none'}, '-=.38')
    })

    return<>
        <div className={styles.holder} ref={main_ref}>
            <div className={`${styles.arrow} arrow`} onClick={button_drop_on_click}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
        </div>
    </>
}