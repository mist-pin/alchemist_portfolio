'use client'

import Link from "next/link";
import styles from "./css/nav_bar.module.css"
import { NavContext } from "@/app/layout";
import { useContext, useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavigationBar({links}){
    const {active, set_active, nav_visible, set_nav_visible} = useContext(NavContext);
    const nav_holder_ref = useRef()
    const [mouse_in, set_mouse_in] = useState(false)
    const timer_ref = useRef(0)

    // register gsap plugins
    useEffect(()=>gsap.registerPlugin(useGSAP),[])

    // navigation open close animations
    useGSAP(()=>{
        const nav_anim_tl = gsap.timeline({scope:nav_holder_ref})
        if(nav_visible){
            // showing navbar animation
            nav_anim_tl.to('.show_button', {x:()=>-100, onComplete:()=>document.querySelector(".show_button").style.display = 'none'})
            nav_anim_tl.to('.content_holder', {display:'flex', x:()=>0})
        }else{
            // hiding navbar animation
            nav_anim_tl.to('.content_holder', {x:()=>-200, onComplete:()=>document.querySelector(".content_holder").style.display = 'none'})
            nav_anim_tl.to('.show_button', {display:'flex', x:()=>0})

        }
    },[nav_visible])

    // navbar auto collapse functionality
    useEffect(()=>{
        if(mouse_in){
            // reset timer if set one.
            if(timer_ref.current){
                clearTimeout(timer_ref.current);
            }
        }else{
            // hiding navbar after 5 seconds if mouse is not hovered
            timer_ref.current = setTimeout(() => {
                set_nav_visible(false)
              }, 5000)
        }
    },[mouse_in])

    return <>
        <div className={styles.nav_holder} ref={nav_holder_ref} onMouseEnter={()=>set_mouse_in(true)} onMouseLeave={()=>set_mouse_in(false)} >
            <div className={`${styles.show_button}  show_button`}  onClick={()=>{
                            set_nav_visible(true);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="80" fill="gray" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
            <div className={`${styles.content_holder} content_holder`}>
                {
                links.map((node, index) => (
                    <Link key={index} href={node.link} className={`${styles.link} ${active==node.text?styles.active_link:''}`}
                        onClick={()=>{
                            sessionStorage.setItem('active_nav_item', `${node.text}`)
                            set_active(node.text);
                        }}
                    >{node.text}</Link>
                ))
                }
            </div>
        </div>
    </>
}