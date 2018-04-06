<template>
  <modal :name="title.toLowerCase()" classes="stone" :width="modalWidth" height="auto" adaptive scrollable @before-open="fadeBG" @closed="unfadeBG">
    <div class="modal-title">
      <a :href="link" rel="noopener noreferrer" target="_blank" style="text-decoration: none;">
        <h1>{{ title }}</h1>
      </a>
    </div>
    <div class="modal-img">
      <a :href="link" rel="noopener noreferrer" target="_blank">
        <img :src="image" :alt="imagealt">
      </a>
    </div>
    <div class="modal-desc">
      <slot></slot>
    </div>
  </modal>
</template>

<script>
import { modalIO } from '../../mixins/modalIO'

export default {
  props: ['title', 'image', 'imagealt', 'link'],
  data () {
    return {
      modalWidth: '90%'
    }
  },
  created () {
    if (window.innerWidth <= 600) this.modalWidth = '100%'
  },
  mixins: [modalIO]
}
</script>

<style>
@font-face {
  font-family: 'dejavusans';
  src: url('DejaVuSansMono-webfont.woff') format('woff');
}

.stone {
  border: 10px solid transparent;
  border-image: url(ephodborder.png) 30 !important;
  border-style: solid;
  border-width: 10px;
  border-color: #ffa728;
  padding: 1%;
  background-color: #070705 !important;
  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);
}

.modal-title h1 {
  font-size: 200%;
  color: #ffa728;
  font-family: silkscreennormal;
  text-align: center;
  line-height: 0;
}

.modal-img {
  width: 100%;
  float: left;
}

.modal-img img {
  max-width: 90%;
  height: auto;
  display: block;
  margin: auto;
  border: 10px solid transparent;
  border-image: url(ephodborder.png) 30 !important;
  border-style: solid;
  border-width: 10px;
  border-color: #ffa728;
}

.modal-desc {
  width: 100%;
  float: right;
}

.modal-desc p {
  font-family: dejavusans;
  color: #00cf80;
  text-align: center;
}

.modal-desc p a {
  text-decoration: none;
  color: #ffa728;
  font-weight: 600;
}

.modal-desc p a:hover {
  color: #ff8626;
}

.modal-desc button {
  font-size: 90%;
  color: #070705;
  background-color: #ffa728;
  font-family: silkscreennormal;
  display: block;
  margin: auto;
  border: 0;
}

.modal-desc button:hover {
  background-color: #ff8626;
}

@media only screen and (min-width: 768px) {
  .modal-img {
    width: 50%;
  }
  .modal-desc {
    width: 50%;
  }
  .modal-title h1 {
    font-size: 500%;
  }
  .modal-desc button {
    font-size: 180%;
  }
}
</style>
