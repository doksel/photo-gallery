const MESSAGES = {
  MESSAGE_DURATION: 5000,

  ERROR_TEXT: "Server error",
};

class Message {
  constructor() {
    this.domElem = document.getElementById("notification");

    this.error = this.error.bind(this);
    this.reset = this.reset.bind(this);
  }

  error(text = MESSAGES.ERROR_TEXT) {
    this.domElem.classList.add("active");
    this.domElem.classList.add("error");
    this.domElem.textContent = text;

    this.reset("error");
  }

  reset(nameClass) {
    setTimeout(() => {
      this.domElem.classList.remove("active");
      this.domElem.classList.remove(nameClass);
    }, MESSAGES.MESSAGE_DURATION);
  }
}

export const message = new Message();
