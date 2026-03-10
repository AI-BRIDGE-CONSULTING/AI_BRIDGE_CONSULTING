import { select } from "framer-motion/m";
import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap"
import styles from "../component_styles/form.module.scss";
import { SendContext } from "../context/Context.jsx";
import { useNavigate } from 'react-router-dom';



export default function Form() {
//WAŻNE
  const { isSended, setIsSended } = useContext(SendContext);
const navigate = useNavigate();
  const selectRef = useRef(null);
  
  const errorRef = useRef(null)
  const [isSelectValueDefault, ChangeisSelectValue] = useState(true);
  const [isEmailNull, SetEmail] = useState(true);

  const emailInputRef = useRef(null);
  const otherInfoRef = useRef(null);

  const serviceTypeCheckerRef = useRef(null);

  const emailCheckerRef = useRef(null);

  function isEmailValide(email) {
    if (
      email.value !== "" &&
      email.value.includes("@") &&
      email.value.length < 50
    ) {
      return true;
    } else {
      return false;
    }
  }
  function isOtherInfoValide(otherInfo){
    if(otherInfo.value.length < 15000){
      return true;
    }else{
      return false;
    }

  }
  function SendSuccess(){
  setIsSended(true)
  navigate('/Send');  
  console.log("Wysłano")
}
function LimitReached(){
  errorRef.current.textContent = "Wysłałeś za dużo wiadomości, spróbuj ponownie później"
}
  function isSelectValide(select) {
    if (select) {
      if (select.value === "default_opt") {
        return false;
      } else {
        return true;
      }
    }
  }
  
  useEffect(() => {
    const handleSelectChange = () => {
      if (!isSelectValide(selectRef.current)) {
        ChangeisSelectValue(true);
        serviceTypeCheckerRef.current.style.color = "#d63232";
        
        
  
      } else {
        ChangeisSelectValue(false);
        serviceTypeCheckerRef.current.style.color = "#338b33";
        
      }
    };
    if (selectRef.current) {
      selectRef.current.addEventListener("change", handleSelectChange);
      handleSelectChange();
    }

    return () => {
      if (selectRef.current) {
        selectRef.current.removeEventListener("change", handleSelectChange);
      }
    };
  }, [selectRef.current]);

  useEffect(() => {
    if (selectRef.current) {
      if (isSelectValueDefault) {
        selectRef.current.style.color = "#797C80";
      } else {
        selectRef.current.style.color = "#ffffff";
      }
    }
  }, [isSelectValueDefault]);

  useEffect(() => {
    function ChangeColor() {
      if (!isEmailValide(emailInputRef.current)) {
        emailCheckerRef.current.style.color = "#d63232";
        SetEmail(true);
      } else {
        emailCheckerRef.current.style.color = "#338b33";
        SetEmail(false);

        // console.log(emailCheckerRef.current.value)
      }
    }

    emailInputRef.current.addEventListener("change", ChangeColor);

    ChangeColor();
    return () => {
      if (emailInputRef.current) {
        emailInputRef.current.removeEventListener("change", ChangeColor);
      }
    };
    
  }, []);
  useEffect(()=>{
    const handleEmailFocus = () =>{
      gsap.to(emailInputRef.current, 
        {boxShadow: "0 0 10px 3px #dbdbdb"})
    }
    const handleEmailBlur = () =>{
      if(isEmailValide(emailInputRef.current)) {
        gsap.to(emailInputRef.current,   
          {boxShadow: "0 0 10px #000"})
      }
      else{
        gsap.to(emailInputRef.current,   
          {boxShadow: "0 0 10px #000"})
      }
    }
    const handleSelectFocus = () =>{
      gsap.to(selectRef.current, 
        {boxShadow: "0 0 10px #dbdbdb"})
    }

    if(emailInputRef.current){
      emailInputRef.current.addEventListener("focus", handleEmailFocus);
      emailInputRef.current.addEventListener("blur", handleEmailBlur);
    }
    if(selectRef.current){
      selectRef.current.addEventListener("focus", handleSelectFocus);
    }

    return () => {
      if(emailInputRef.current){
        emailInputRef.current.removeEventListener("focus", handleEmailFocus);
        emailInputRef.current.removeEventListener("blur", handleEmailBlur);
      }
      if(selectRef.current){
        selectRef.current.removeEventListener("focus", handleSelectFocus);
      }
    }
  }, [])
  useEffect(()=>{
    const handleSelectFocus = () =>{
      gsap.to(selectRef.current, 
        {boxShadow: "0 0 10px 3px #dbdbdb", duration: 0})
    }
    const handleSelectBlur = () =>{
      if(isEmailValide(selectRef.current)) {
        gsap.to(selectRef.current,   
          {boxShadow: "0 0 10px #000"})
      }
      else{
        gsap.to(selectRef.current,   
          {boxShadow: "0 0 10px #000"})
      }
    }
   

    if(selectRef.current){
      selectRef.current.addEventListener("focus", handleSelectFocus);
      selectRef.current.addEventListener("blur", handleSelectBlur);
    }
    if(selectRef.current){
      selectRef.current.addEventListener("focus", handleSelectFocus);
    }

    return () => {
      if(selectRef.current){
        selectRef.current.removeEventListener("focus", handleSelectFocus);
        selectRef.current.removeEventListener("blur", handleSelectBlur);
      }
      if(selectRef.current){
        selectRef.current.removeEventListener("focus", handleSelectFocus);
      }
    }
  }, [])
  useEffect(()=>{
    const handleOtherInfoFocus = () =>{
      gsap.to(otherInfoRef.current, 
        {boxShadow: "0 0 10px 3px #dbdbdb", duration: 0})
    }
    const handleOtherInfoBlur = () =>{
      if(isOtherInfoValide(otherInfoRef.current)) {
        gsap.to(otherInfoRef.current,   
          {boxShadow: "0 0 10px #000"})
      }else{
        gsap.to(otherInfoRef.current,   
          {boxShadow: "0 0 10px #d63232"})
      }
    }
   

    if(otherInfoRef.current){
      otherInfoRef.current.addEventListener("focus", handleOtherInfoFocus);
      otherInfoRef.current.addEventListener("blur", handleOtherInfoBlur);
    }
    

    return () => {
      if(otherInfoRef.current){
        otherInfoRef.current.removeEventListener("focus", handleOtherInfoFocus);
        otherInfoRef.current.removeEventListener("blur", handleOtherInfoBlur);
      }
      if(otherInfoRef.current){
        otherInfoRef.current.removeEventListener("focus", handleOtherInfoFocus);
      }
    }
  }, [])
  
  async function ValidateForm(e) {
    e.preventDefault()
    const email = emailInputRef.current.value;
    const service_type = selectRef.current.value;
    let otherInfo = otherInfoRef.current.value;
    console.log(`email: ${email}`);
    console.log(`service_type: ${service_type}`);
    console.log(`otherInfo: ${otherInfo}`);
    if (!isEmailValide(emailInputRef.current)) {
      e.preventDefault();
      errorRef.current.textContent = "Podaj poprawny adres e-mail"
      gsap.to(emailInputRef.current, 
        {boxShadow: "0 0 10px 3px #a03434"})
      return;
    }
    if (!isSelectValide(selectRef.current)) {
      e.preventDefault();
      gsap.to(selectRef.current, 
        {boxShadow: "0 0 10px 3px #a03434"})
      errorRef.current.textContent = "Wybierz rodzaj usługi"
      return;
    }
    if(otherInfo === "") otherInfo = "brak"
    try {
      const response = await fetch("https://api.aibridgeconsulting.pl/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, service_type, otherInfo }),
      });

      const data = await response.json();
      console.log(data);
      if(data.error){
        LimitReached()
      }
      if(data.successDb == true){
        SendSuccess()
      }
    } catch (error) {
      console.error("Błąd:", error);
    }
  }
  return (
    <>
      <div className={styles.formContent}>
        <h2 className={styles.headerForm}>
          Zarezerwój Swoją Darmową Konsultację AI
        </h2>
        <div className={styles.formContainer}>
          <h2>Rozpocznij współpracę z nami</h2>
          <h5>Wpisz swój adres e-mail i wybierz usługę, aby rozpocząć</h5>
          <form action="">
            <label htmlFor="email">
              email<span ref={emailCheckerRef}>*</span>
            </label>
            <input
              placeholder=" Wpisz np. twoja-firma@gmail.com"
              type="text"
              name="email"
              ref={emailInputRef}
            />
            <label htmlFor="service_type">
              Rodzaj usługi<span ref={serviceTypeCheckerRef}>*</span>
            </label>
            <select name="service_type" id="" ref={selectRef}>
              <option className={styles.defaultOpt} value="default_opt">
                -- wybierz rodzaj usługi --
              </option>
              <option
                className={`${styles.defaultOpt} ${styles.freePackage}`}
                value="Darmowe 5-godzinne szkolenie"
              >
                Darmowe 2-godzinne szkolenie (oferta ważna do końca kwietnia
                2026)
              </option>
              <option
                className={`${styles.defaultOpt} ${styles.platinePackage}`}
                value="Pakiet Podstawowy"
              >
                Podstawowy pakiet (zestaw 3 dwugodzinnych szkoleń)
              </option>
              <option
                className={`${styles.defaultOpt} ${styles.diamondPackage}`}
                value="Pakiet Premium"
              >
                Diamentowy pakiet premium (zestaw maksymalnie 5 dwugodzinnych
                szkoleń)
              </option>
            </select>
            <label htmlFor="other_info">Dodatkowe informacje</label>
            <textarea
              name="other_info"
              id=""
              placeholder="Dodatkowe informacje.."
              ref={otherInfoRef}
            ></textarea>
            <div className={styles.error} ref={errorRef}></div>
            <hr />
            <button type="submit" onClick={(e) => ValidateForm(e)}>
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
