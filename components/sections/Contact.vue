<template>
  <section class="contact-section">
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
                <a href="https://linkedin.com/in/martyn-dodds-00b2a319b" target="_">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://forum.freecodecamp.org/u/biscuitmanz/summary" target="_">
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
            >{{response}}</p>
            <form>
              <input class="input" type="text" placeholder="Your name" v-model="name" />
              <input class="input" type="text" placeholder="Your E-Mail" v-model="email" />
              <input class="input" type="text" placeholder="Phone number" v-model="phone" />
              <textarea placeholder="your message" class="text-area" rows="6" v-model="message"></textarea>
              <button class="submit-button" @click="sendDetails">send</button>
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
export default {
  components: {
    Footer,
    SectionTitle
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      phone: "",
      subject: "message from portfolio",
      response: "hello",
      sent: true,
      showMessage: false,
      messageStyle: "sent-message",
      error: "red",
      success: "success"
    };
  },
  computed: {
    messageOpacity() {
      return this.showMessage ? {opacity: '1'} : {opacity: '0'}
    }
  },
  methods: {
    async sendDetails(e) {
      e.preventDefault();
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        phone: this.phone,
        subject: this.subject
      };
      fetch("/api/contact_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          
          this.response = res.message;
          this.sent = res.sent;
          this.showMessage = true;
          setTimeout(() => {
            this.showMessage = false;
          }, 5000);
        })
        .catch(err => console.log(err));
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
  height: 400px;
}
.contact-details {
  flex: 3;
  display: flex;
  align-items: flex-end;
  height: 100%;
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
  height: 100%;
}

.sent-message {
  font-weight: 600;
  position: absolute;
  top: 0;
  right: 0;
  
  
  text-transform: capitalize;
  transition: .5s ease;
  /* opacity: 0; */
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
  padding: 15px 40px;
  line-height: 1.5;
  font-size: 14px;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  width: 100%;
  border: none;
  cursor: pointer;
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
</style>