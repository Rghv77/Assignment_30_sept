import React, { useState,useEffect } from "react";
import styles from "./styles.module.css"

const Form=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [mob,setMob]=useState(false);

    const handleresize=()=>{
        if(window.innerWidth<=768) setMob(true);
        else setMob(false)
    }

    useEffect(()=>{
        window.addEventListener("resize",handleresize);
        return ()=>{
            window.removeEventListener("resize",handleresize)
        }
    },[])
    const handleSubmit=(e)=>{
       
        
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
        
    }
    return <>
    <div className={styles.container}>
        <div className={styles.textdiv}>
           {!mob && <h4 className={styles.heading1}>Contact Us</h4>}
            <h1 className={styles.heading2}>{mob?"Book Appointment":"Make An Appointment"}</h1>
        </div>
        
            <form onSubmit={handleSubmit} className={styles.form}>
          
                <div className={styles.inputFlexDiv}>
                    {mob && <label htmlFor="name" className={styles.label}>Name*</label>}
                
                    <input id="name" type="text" placeholder="Full Name*" value={name} onChange={(e)=>setName(e.target.value)} required className={styles.input}/>
                                    
                    {mob && <label htmlFor="email" className={styles.label}>Email*</label>}
                    <input id="email" type="email" placeholder="Email*" value={email} onChange={(e)=>setEmail(e.target.value)} required className={styles.input}/>
                  
                    </div>           

                    <div className={styles.inputFlexDiv}>
                    {mob && <label htmlFor="dep" className={styles.label}>Department*</label>}
                    <select id="dep" className={styles.input}>
                        <option>Please Select</option>
                        <option>b</option>
                        <option>c</option>
                    </select>
                                   
                    {mob && <label htmlFor="time" className={styles.label}>Time*</label>}
                <select id="time" className={styles.input}>
                        <option>4:00 Available</option>
                        <option>b</option>
                        <option>c</option>
                    </select>
                    
                    </div>  

                    {!mob && <div>
                        <textarea placeholder="Message" className={styles.inputMsg} value={message} onChange={(e)=>setMessage(e.target.value)} rows={5}/>
                        </div> } 
                        
                        <div className={styles.button} type="submit">Book An Appointment</div>
            </form>
        </div>
    
    </>
}
export default Form;