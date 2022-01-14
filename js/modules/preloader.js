const d = document;

export default function preloader(){
   window.addEventListener("load",(e)=>{
      document.querySelector(".preloader").classList.add("opacity-visibility")
});
}