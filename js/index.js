import { startLoginWithGoogle } from "./auth.js";
import { btnIniciar } from "./selectors.js";

document.addEventListener("DOMContentLoaded", () => {
    btnIniciar.addEventListener("click", startLoginWithGoogle);
});