// JAVA-SCRIPT:
const wrapper = document.querySelector(".wrapper");
const qr_code_input = wrapper.querySelector(".form input");
const generater_button = wrapper.querySelector(".form button");
const qr_code_img = wrapper.querySelector(".qr-code img");

generater_button.addEventListener("click", () =>
{
    let qr_code_value = qr_code_input.value;

    // INPUT-FIELD (EMPTY)
    if(!qr_code_value) return alert("PLZ, PROVIDE ANY TEXT OR URL");

    // MESSAGE
    generater_button.innerHTML = "Plz, Wait QR-Code Processing..."

    // GENERATOR, QR-CODE (IMAGE)
    qr_code_img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qr_code_value}`;

    // LOAD, WRAPPER-ACTIVE ONLY QR-CODE (GENERATED)
    qr_code_img.addEventListener("load", () =>
    {
        wrapper.classList.add("wrapper-active");
        generater_button.innerHTML = "Generate QR-Code"
    });
});

// REMOVE, WRAPPER-ACTIVE
qr_code_input.addEventListener("keyup", () =>
{
    if(!qr_code_input.value)
    {
        wrapper.classList.remove("wrapper-active");
    }
});