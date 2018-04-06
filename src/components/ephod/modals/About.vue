<template>
  <modal name="about" classes="stone" :width="'90%'" height="auto" adaptive scrollable @before-open="fadeBG" @closed="unfadeBG">
    <div class="modal-title">
      <h1>8 Bit Ephod</h1>
    </div>
    <div class="modal-content">
      <p>
        Creative base for apps made by David McKlatch
        <br><br>
        <a href="https://twitter.com/mcklatch" rel="noopener noreferrer" target="_blank">
          <button>@McKlatch</button>
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
</style>
