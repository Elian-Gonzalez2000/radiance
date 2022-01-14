const d = document;

export default function carrusel(){
   const $carrusel = d.querySelector(".carrusel-container"),
      $carruselItems = d.querySelectorAll(".carrusel-item"),
      $carruselbtns = d.querySelector(".carrusel-btns");

      $carrusel.style.width = `${100 * $carruselItems.length}%`;
      
      let i = 1;
      $carruselItems.forEach((el)=>{
         el.setAttribute("data-item", `${i}`)
         const $span = d.createElement("span");
         $span.classList.add("slide-btn");
         $span.setAttribute("data-item", `${i}`);
         $carruselbtns.insertAdjacentElement("beforeend", $span);
         i++;
      });
      $carruselbtns.querySelector(".slide-btn").classList.add("active");
      
      d.addEventListener("click", (e)=>{
         e.preventDefault();
         if(e.target.matches(".slide-btn")){
               $carrusel.style.setProperty("transform", `translateX(-${(e.target.dataset.item / $carruselItems.length - (1 / $carruselItems.length)) * 100}%)`);
               $carruselbtns.querySelectorAll(".slide-btn").forEach(el =>{
                  el.classList.remove("active");
               })
               e.target.classList.add("active");
         }
      });
}