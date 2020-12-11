$(document).ready(function () {
  let form = document.forms[0];
  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      let formData = new FormData(form);
      formData.forEach((e) => {
        console.log(e);
      });
      let month = Number(formData.get("month-year").split("/")[0]);
      if (month < 1 || month > 12) {
        errorMessage("Month of birth is wrong");
        return;
      }
      if (!validateEmail(formData.get("email"))) {
        errorMessage(
          "There's something wrong with your email: " + formData.get("email")
        );
        return;
      }
      if (formData.get("user-name").length < 6) {
        errorMessage("CardHolder's name is too short");
        return;
      }
      Swal.fire({
        title: "Nice!",
        text:
          "You almost got your new card! We sent confirm message on " +
          formData.get("email"),
        icon: "success",
        confirmButtonText: "Cool",
      });
    },
    false
  );
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function errorMessage(text) {
  Swal.fire({
    title: "Ooops!",
    text: text,
    icon: "error",
    confirmButtonText: "Ok",
  });
}
