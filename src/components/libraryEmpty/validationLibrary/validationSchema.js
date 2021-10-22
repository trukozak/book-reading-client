import * as Yup from "yup";

const title = Yup.string()
.required("необхідно заповнити поле")
.max(50, "назва книги повинна складатися не бiльше ніж з 50 символів")
.matches(/^[0-9A-ZА-ЯЁa-zа-яё]+$/, "невірний формат");

const author = Yup.string()
.required("необхідно заповнити поле")
.max(50, "назва книги повинна складатися не бiльше ніж з 50 символів")
.matches(/^[0-9A-ZА-ЯЁa-zа-яё]+$/, "невірний формат");

const year = Yup.string()
.required("необхідно заповнити поле")
.max(4, "рік повинен складатися не бiльше ніж з 4 символів")
.matches(/^[1,2][0-9]{3}$/, "невірний формат")
// .matches(/^(?:(\/|-|\.)(?:0?[1,3-9]|1[0-2]))$/, "невірний формат");

const pages = Yup.string()
.required("необхідно заповнити поле")
.max(4, "сторінки повинні складатися не бiльше ніж з 4 символів")
.matches(/^([0-9_]{1,4})$/, "невірний формат");

export const libraryValidationSchema = Yup.object({
    title,
    author,
    year,
    pages
  });