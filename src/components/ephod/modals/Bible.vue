<template>
  <modal name="bible" classes="stone" :width="'90%'" height="auto" adaptive scrollable @before-open="fadeBG" @closed="unfadeBG">
    <div class="modal-title">
      <h1>Ephod</h1>
    </div>
    <div class="modal-content">
      <p>
      a span shall be the length thereof, and a span shall be the breadth thereof. And thou shalt set in it settings of stones, even four rows of stones: the first row shall be a sardius, a topaz, and a carbuncle: this shall be the first row. And the second row shall be an emerald, a sapphire, and a diamond. And the third row a ligure, an agate, and an amethyst. And the fourth row a beryl, and an onyx, and a jasper: they shall be set in gold in their inclosings. And the stones shall be with the names of the children of Israel, twelve, according to their names, like the engravings of a signet; every one with his name shall they be according to the twelve tribes.
      <br><br>
      <a href="https://www.biblegateway.com/passage/?search=Exodus+28&version=KJV" rel="noopener noreferrer" target="_blank">
        <button>Exodus 28</button>
      </a>
      </p>
    </div>
  </modal>
</template>

<script>
import { modalIO } from '../../mixins/modalIO'

export default {
  mixins: [modalIO]
}
</script>

<style>
.modal-content p {
  font-family: dejavusans;
  color: #00cf80;
  text-align: center;
}

.modal-content p a {
  text-decoration: none;
  color: #ffa728;
  font-weight: 600;
}

.modal-content button {
  font-size: 90%;
  color: #070705;
  background-color: #ffa728;
  font-family: silkscreennormal;
  display: block;
  margin: auto;
  border: 0;
}

@media only screen and (min-width: 768px) {
  .modal-content button {
    font-size: 180%;
  }
}
</style>
