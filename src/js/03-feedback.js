import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const FEEDBACK_KEY = 'feedback-form-state';
function handlerInputForm(ev) {
  let formInfo = localStorage.getItem(FEEDBACK_KEY);
  formInfo = formInfo ? JSON.parse(formInfo) : {};
  formInfo[ev.target.name] = ev.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formInfo));
  console.log(ev.target.name, ev.target.value);
  console.log(ev.currentTarget);
}
function handlerSubmitForm(ev) {
  ev.preventDefault();
  const {
    elements: { email, message },
  } = ev.currentTarget;

  if (email.value === '' || message.value === '') {
    alert('Please fill in all the fields!');
  } else {
    const userInfo = {
      email: email.value,
      message: message.value,
    };
    console.log(userInfo);
    form.reset();
    localStorage.removeItem(FEEDBACK_KEY);
  }
}
function handlerFormFill() {
  let saveInfo = localStorage.getItem(FEEDBACK_KEY);
  if (saveInfo) {
    saveInfo = JSON.parse(saveInfo);
    Object.entries(saveInfo).forEach(
      ([key1, data1]) => (form.elements[key1].value = data1)
    );
  }
}
handlerFormFill();
form.addEventListener('input', throttle(handlerInputForm, 500));
form.addEventListener('submit', handlerSubmitForm);
console.log(form);
