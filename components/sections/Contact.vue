<template>
  <section class="contact-section" >
    <div class="container">
      <div class="wrap">
        <SectionTitle title="contact me" label="contact" />
        <div class="h-50"></div>
        <div class="contact-wrap" data-aos="fade-up">
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
            <form action method="post" name="contact">
              <input class="input" type="text" placeholder="Your name" />
              <input class="input" type="text" placeholder="Your E-Mail" />
              <input class="input" type="text" placeholder="Phone number" />
              <textarea placeholder="your message" class="text-area" rows="6"></textarea>
              <button type="submit" class="submit-button">send</button>
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
  transition: .3s;
}

.icons i:hover {
  color: var(--blue);
}

.contact-form {
  flex: 5;
  display: flex;
  align-items: flex-end;
  height: 100%;
}
.input {
  width: 100%;
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
</style>