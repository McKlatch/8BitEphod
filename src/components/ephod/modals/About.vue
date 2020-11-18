<template>
  <modal name="about" classes="stone" :width="'90%'" height="auto" adaptive scrollable @before-open="fadeBG" @closed="unfadeBG">
    <div class="modal-title">
      <h1>8 Bit Ephod</h1>
    </div>
    <div class="modal-content">
      <p class="intro">
        Creative base for web apps made by <span class="line">David McClatchey</span>
      </p>
      <a v-for="link in links" :href="link.url" rel="noopener noreferrer" target="_blank" style="padding: 0.1vmin;">
        <button type="button">
          <img :src="link.icon" :alt="link.title" height="42" width="42"> 
          <span class="line btntext">{{ link.btnText }}</span>
        </button>
      </a>
    </div> 
  </modal>
</template>

<script>
import { modalIO } from '../../mixins/modalIO'

export default {
  data () {
    return {
      links: {
        email: {
          title: 'Email',
          url: 'mailto:david@mcklatch.com',
          btnText: 'Send Me Emails',
          icon: '/static/email.svg'
        },
        twitter: {
          title: 'Twitter',
          url: 'https://twitter.com/mcklatch',
          btnText: 'Follow Me',
          icon: '/static/twitter.svg'
        },
        github: {
          title: 'GitHub',
          url: 'https://github.com/McKlatch',
          btnText: 'See My Code',
          icon: '/static/github.svg'
        },
        behance: {
          title: 'Behance',
          url: 'https://www.behance.net/mcklatch',
          btnText: 'View My Images',
          icon: '/static/behance.svg'
        },
        linkedin: {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mcklatch/',
          btnText: 'Spy On Me',
          icon: '/static/linkedin.svg'
        },
        cv: {
          title: 'CV',
          url: '/static/David McClatchey CV.pdf',
          btnText: 'Download my CV',
          icon: '/static/pdf.svg'
        }
      }
    }
  },
  mixins: [modalIO]
}
</script>

<style scoped>
.intro {
  font-size: calc(1em + 0.45vmax);
}

a {
  text-decoration: none;
}

button > img {
  height: calc(0.45em + 0.45vmax);
  float: left;
  margin-top: 0.25em;
}

button {
  width: 25vmax;
}

button:hover {
  background-color: #ff8626;
}

span.btntext {
  font-size: calc(0.45em + 0.95vmax);
  margin-bottom: 0.2em;
}

span.line {
  display: inline-block;
  white-space: pre;
}
</style>
