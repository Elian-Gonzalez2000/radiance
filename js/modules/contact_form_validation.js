/*Validaciones de los elementos del formulario, colocar atributo required, pattern y title en el HTML a los inputs que quieran ser validados*/

const d = document;

export default function contactFormValidation() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  //console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      //console.log($input, pattern);
      if (pattern && $input.value !== "") {
        //console.log("Este input tiene patron");
        let regEx = new RegExp(pattern);
        return !regEx.exec($input.value)
          ? $input.nextElementSibling.classList.add("is-active")
          : $input.nextElementSibling.classList.remove("is-active");
          console.log($input.nextElementSibling);
      }

      if (!pattern) {
        //console.log("Este input NO tiene patron");
        return $input.value === ""
          ? $input.nextElementSibling.classList.add("is-active")
          : $input.nextElementSibling.classList.remove("is-active");
      }
    }
  });
}