'use client'

import Home from "@/components/pages/home_page"
import About from "@/components/pages/about_page"
import Contact from "@/components/pages/contact_page"
import BlogList from "@/components/pages/blog_page";

import styles from "./page.module.css"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";


const Main = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    hor_scroll();
  },[]);    

  const main_ref = useRef();
  const {contextSafe} = useGSAP({scope:main_ref});

  const hor_scroll = contextSafe(()=>{

    gsap.to('.hor_scroll_1',{
      translateX:"-100vw",
      duration:1,
      scrollTrigger:{
        target:'.hor_scroll_1',
        scrub:.5,
        pin:'.hor_scroll_1',
        start:"clamp(top top)",
        end:"clamp(bottom top)",
        snap:{
          snapTo:[0,1],
          delay:0,
          duration:1,
          ease:'none',
        }
      }
    });

  })

  return <>
      <main className={styles.main_container} ref={main_ref}>
        <Home/>
        <div className={`${styles.horizontal_container} hor_scroll_1`}>
          <About/>
          <Contact/>
        </div>
        <BlogList/>
      </main>
    </>
};

export default Main;
