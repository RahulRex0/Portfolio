import Image from "next/image";

const Inlinestyle={
  display: "inline-flex",
  alignItems: "center",
  gap:"6"
} as const;

export default function ContactPage(){
    return(
        <main style={{ padding: 24 }}>
        <h1 style={{fontSize:"36px",fontWeight:"bold", marginBottom:"20px"}}>Contact</h1>
        <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
            <a href="" style={Inlinestyle}><Image src={"/icons/email.svg" } alt="blank" width={16} height={16} style={{marginRight:"3px"}}></Image> Email: rahulrex551@gmail.com</a>
            
            <a href="" style={Inlinestyle}><Image src={"/icons/github.svg"} alt="blank" width={16} height={16} style={{marginRight:"3px"}}></Image> GitHub: RahulRex0</a>

            <a href="https://linkedin.com/" style={Inlinestyle}><Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} style={{marginRight:"3px"}} />
                 LinkedIn</a>
        </div>
        
      </main>
    );
}