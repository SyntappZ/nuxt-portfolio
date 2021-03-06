<template>
  <section class="contact-section" ref="contactSection">
    <div class="container">
      <div class="wrap">
        <SectionTitle title="contact me" label="contact" />
        <div class="h-50"></div>
        <div class="contact-wrap aos-animate" data-aos="fade-up">
          <div class="contact-details">
            <div class="bottom-wrap">
              <h3>Email</h3>
              <p class="email">syntappz@gmail.com</p>
              <h3>Website links</h3>
              <div class="icons">
                <a href="https://github.com/SyntappZ" target="_">
                  <i class="fab fa-github-square"></i>
                </a>
                <a
                  href="https://linkedin.com/in/martyn-dodds-00b2a319b"
                  target="_"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://forum.freecodecamp.org/u/biscuitmanz/summary"
                  target="_"
                >
                  <i class="fab fa-free-code-camp"></i>
                </a>
                <a href="https://www.codewars.com/users/SyntappZ" target="_">
                  <i class="fas fa-laptop-code"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <p
              :class="[sent ? success : error, messageStyle]"
              :style="messageOpacity"
            >
              {{ successMessage }}
            </p>
            <form @submit="sendDetails">
              <input
                class="input"
                type="text"
                placeholder="Your name"
                v-model="name"
                required
              />
              <input
                :style="invalidMail"
                class="input"
                type="text"
                placeholder="Your E-Mail"
                v-model="email"
                required
              />
              <input
                class="input"
                type="text"
                placeholder="Phone number"
                v-model="phone"
              />
              <textarea
                placeholder="your message"
                class="text-area"
                rows="6"
                v-model="message"
                required
              ></textarea>
              <button type="submit" class="submit-button">
                <div class="loader" v-if="showLoader"></div>
                <p v-else>send</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
import Footer from "~/components/Footer.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Footer,
    SectionTitle
  },
  mounted() {
    const top = this.$refs.contactSection.offsetTop;
    this.getSelectionPosition({ section: "contactPosition", position: top - 200 });
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      phone: "",
      subject: "message from portfolio",
      successMessage: "",
      sent: true,
      showMessage: false,
      showLoader: false,
      messageStyle: "sent-message",
      error: "red",
      success: "success",
      isInvalidMail: false
    };
  },
  computed: {
    messageOpacity() {
      return this.showMessage ? { opacity: "1" } : { opacity: "0" };
    },
    invalidMail() {
      return this.isInvalidMail ? { borderColor: "red" } : null;
    }
  },
  methods: {
    ...mapActions(["getSelectionPosition"]),

    validateEmail(email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    },
    async sendDetails(e) {
      this.showLoader = true;
      e.preventDefault();
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        phone: this.phone,
        subject: this.subject
      };
      if (this.validateEmail(this.email)) {
        fetch("/api/contact_form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(res => {
            this.showLoader = false;
            this.successMessage = res.message;
            this.sent = res.sent;
            this.showMessage = true;
            this.name = "";
            this.email = "";
            this.message = "";
            this.phone = "";
            setTimeout(() => {
              this.showMessage = false;
            }, 5000);
          })
          .catch(err => console.log(err));
      } else {
        this.isInvalidMail = true;
        this.showMessage = true;
        this.successMessage = "Invalid Email! Please check your email";
        this.sent = false;
        this.showLoader = false;
        setTimeout(() => {
          this.showMessage = false;
          this.isInvalidMail = false;
        }, 5000);
      }
    }
  }
};
</script>

<style scoped>
.contact-section {
  min-height: 60vh;
  background: var(--grey);
}
.wrap {
  width: 100%;
  padding: 100px 0 0 0;
}

.contact-wrap {
  display: flex;
  flex-wrap: wrap;
  min-height: 400px;
}
.contact-details {
  flex: 3;
  display: flex;
  align-items: flex-end;

  min-width: 300px;
}
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
}

.success {
  color: #425bb5;
}

.red {
  color: red;
}

.email {
  color: rgb(75, 75, 75);
}

.icons {
  display: flex;
  margin-top: 20px;
}
a {
  color: inherit;
}
.icons i {
  font-size: 30px;
  margin-right: 8px;
  cursor: pointer;
  color: inherit;
  transition: 0.3s;
}

.icons i:hover {
  color: var(--blue);
}

.contact-form {
  flex: 5;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-top: 30px;
  height: 100%;
}

.sent-message {
  font-weight: 600;
  position: absolute;
  top: 0;
  right: 0;
  text-transform: capitalize;
  transition: 1s ease;
}
.input {
  width: 100%;
  min-width: 200px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 0;
  border: solid 1px #c2c2c2;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5;
}
.input::placeholder {
  color: #b6b6b6;
  text-transform: capitalize;
}
.text-area {
  width: 100%;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
  border-radius: 0;
  border: solid 1px #c2c2c2;
  font-family: inherit;
}
.text-area::placeholder {
  color: #b6b6b6;
  text-transform: capitalize;
}
.submit-button {
  background-color: var(--blue);
  color: #fff;
  height: 50px;
  line-height: 1.5;
  font-size: 14px;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  width: 100%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 4px solid #567af1;
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 1024px) {
  .contact-wrap {
    flex-direction: column-reverse;
  }
  .contact-details {
    text-align: center;
  }
  .contact-form {
    margin-bottom: 30px;
  }
  .bottom-wrap {
    width: 100%;
  }
  .icons {
    justify-content: center;
  }
  .icons i {
    margin: 0 4px;
  }
}
@media (max-width: 600px) {
  .sent-message {
    font-size: 12px;
  }
}
</style>
