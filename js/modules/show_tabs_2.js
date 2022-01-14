const d = document;

export default function showTabs(tabLink, tabContent){
   const $dataTab = d.querySelectorAll(tabLink),
      $dataContent = d.querySelectorAll(tabContent);

   d.addEventListener("click", (e) => {
      if(e.target.matches(`${tabLink}`) || e.target.matches(`${tabLink} *`)){
         if(e.target.matches(`${tabLink} *`)){
            //console.log(e.target.parentElement.dataset);
            let tabDataset = e.target.parentElement.dataset;
            $dataContent.forEach(el => {
               if(tabDataset.tab === el.dataset.content){
                  if(el.classList.contains("active")){
                     el.classList.remove("active");
                     el.classList.add("disable");
                     e.target.parentElement.querySelector("span").textContent = "+";
                  } else {
                     el.classList.add("active");
                     el.classList.remove("disable");
                     e.target.parentElement.querySelector("span").textContent = "-";
                  }
               }
            });
         }
      }
   })
}