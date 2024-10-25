'use client'
import NavigationBar from "@/components/nav_bar";
import "@/public/globals.css";
import { useState, createContext, useEffect} from "react";


export const NavContext = createContext()

export default function RootLayout({ children }) {
  const links = [
    {link:"/#home", text:"Home"},
    {link:"/#about", text:"About"},
    {link:"/#blogs", text:"Blog"},
    {link:"/project", text:"Projects"},
    {link:"/#contact", text:"Contact"},
  ]
  const [active, set_active] = useState('Home');
  const [nav_visible, set_nav_visible] = useState(false);
  const [enable_nav, set_enable_nav] = useState(false);
  const [project_id_active, set_project_id_active] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem('button_used')){
      set_enable_nav(true);
    }
    if(sessionStorage.getItem('active_nav_item')){
      set_active(sessionStorage.getItem('active_nav_item'));
    }
  },[])

  return (
    <html lang="en">
      <body className={!enable_nav?'overflow-hidden':'overflow-y-auto'}>
          <NavContext.Provider value={{active, set_active, nav_visible, set_nav_visible, enable_nav, set_enable_nav, project_id_active, set_project_id_active}}>
            {children}
            {enable_nav && <NavigationBar links = {links}/>}
        </NavContext.Provider>
      </body>
    </html>
  );
}
