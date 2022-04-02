import React  from "react"

function NavBarMiniCart({status}) {
    const miniCartRef = React.createRef() ;

    let timeOut ;
    const openMiniCart = () => {
        clearTimeout(timeOut)
        miniCartRef.current.style.opacity = 1;
        miniCartRef.current.style.transform = "translateY(0)";
        miniCartRef.current.style.zIndex = "5";
    }
    const closeMiniCart = () => {
        timeOut = setTimeout(()=>{
            miniCartRef.current.style.opacity = 0.001;
            miniCartRef.current.style.transform = "translateY(-5px)";
            miniCartRef.current.style.zIndex = "1";
        },1000)
    }

  return (
    <section ref={miniCartRef} className="nav-mini-checkout-container" 
    onMouseEnter={openMiniCart} 
    onMouseLeave={closeMiniCart}>
        <div className=""></div>
    </section>
  )
}

export default NavBarMiniCart