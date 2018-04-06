<template>
  <div>
    <app-ephod :gems="gems"/>
    <app-modal title="MathMaker" image="/static/MManim.gif" imagealt="Make Math" link="http://mathmaker.8bitephod.com/">
      <p>
        Made using Python and Django
        <br><br>
        Randomly generated maths exercises for teachers to share with children. Made to the specifications of the final project assignment on 
        <a href="https://cs50.harvard.edu/" rel="noopener noreferrer" target="_blank">
          Harvard CS50. 
        </a>
        Entire project made personally with all features designed and implemented by David McClatchey.
        <br><br>
        Features Bootstrap interface making ajax calls to python logic served by django. All variations possible through the form are generated through python scripts, all error cases are filtered out before user submission by the user interface.
        <br><br>
        <a href="http://mathmaker.8bitephod.com/" rel="noopener noreferrer" target="_blank">
          <button>Visit MathMaker</button>
        </a>
        <a href="https://github.com/McKlatch/MathMaker" rel="noopener noreferrer" target="_blank">
          <span class="line">See the repo on Github</span>
        </a>
      </p>
    </app-modal>
    <app-modal title="Stocks" image="/static/stocksanim.gif" imagealt="Buy and Sell Stocks" link="http://stocks.8bitephod.com/">
      <p>
        <br>
        Made using VueJS with Vuex and Vue-router
        <br><br>
        Showcases realistic implementation of assets displayed using VueJS components. Made to the specifications of the final project assignment on <a href="https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview" rel="noopener noreferrer" target="_blank">VueJS 2 - The complete Guide (Udemy)</a>
        <br><br>
        personal additions include the styling (Bootstrap and Bubbly-bg), localStorage saving, and population of stocks with genuine stock data using the JS fetch() method on <a href="https://iextrading.com/developer/" rel="noopener noreferrer" target="_blank">IEX API</a>
        <br><br>
        <a href="http://stocks.8bitephod.com/" rel="noopener noreferrer" target="_blank">
          <button>visit Stock Trader</button>
        </a>
        <a href="https://github.com/McKlatch/StockTrader" rel="noopener noreferrer" target="_blank">
          <span class="line">See the repo on Github</span>
        </a>
      </p>
    </app-modal>
    <app-modal title="JS30" image="/static/JS30.jpg" imagealt="30 JavaScript Challenges" link="http://JS30.8bitephod.com/">
      <p>
        <br>
        30 days of Vanilla JavaScript Challenges
        <br><br>
        All 30 finished products solved and implemented by David McClatchey as instructed by the online course <a href="https://javascript30.com/" rel="noopener noreferrer" target="_blank"> JS30 by Wes Bos</a>
        <br><br>
        For this portfolio all of the challenges, which were originially completed with plain/vanilla JS in separate pages, have been translated into a single VueJS app for presentation.
        <br><br>
        <a href="http://JS30.8bitephod.com/" rel="noopener noreferrer" target="_blank">
          <button>visit McKlatch vs. JS30</button>
        </a>
        <a href="https://github.com/McKlatch/JS30" rel="noopener noreferrer" target="_blank">
          <span class="line">See the repo on Github</span>
        </a>
      </p>
    </app-modal>
    <app-modal title="McKlatch" image="/static/McKlatch.jpg" imagealt="McKlatch" link="http://mcklatch.com/">
      <p>
        <br>
        My Personal Website
        <br><br>
        A landing site for all of the details and social links related to David and Angela McClatchey. The primary use of this website is to collect email addresses for our prayer letter list.
        <br><br>
        Made with VueJS using vue-router and bootstrap components on other pages (not the homepage). Integrates with Mailchimp and Google Analytics.
        <br><br>
        <a href="http://mcklatch.com/" rel="noopener noreferrer" target="_blank">
          <button>visit McKlatch.com</button>
        </a>
        <a href="https://github.com/McKlatch/McKlatch" rel="noopener noreferrer" target="_blank">
          <span class="line">See the repo on Github</span>
        </a>
      </p>
    </app-modal>
    <app-about/><app-bible/>
  </div>
</template>

<script>
import { eventBus } from '../main'

import appEphod from './ephod/Ephod.vue'
import appModal from './ephod/modals/Modal.vue'
import appAbout from './ephod/modals/About.vue'
import appBible from './ephod/modals/Bible.vue'

export default {
  data () {
    return {
      gems: {
        // left 1
        sardius: '^ ^ 8',
        // middle 1
        topaz: 'Bit',
        // right 1
        carbuncle: 'Ephod',
        // left 2
        emerald: 'Mathmaker',
        // middle 2
        sapphire: 'Stocks',
        // right 2
        diamond: 'JS30',
        // left 3
        jacinth: 'McKlatch',
        // middle 3
        agate: '',
        // right 3
        amethyst: '',
        // left 4
        beryl: '',
        // middle 4
        onyx: 'About',
        // right 4
        jasper: ''
      }
    }
  },
  mounted () {
    if (this.$route.name !== 'HelloWorld') {
      this.$modal.show(`${this.$route.name.toLowerCase()}`)
    }
  },
  components: {
    appEphod,
    appAbout,
    appBible,
    appModal
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === 'HelloWorld') this.$modal.hide(`${from.name.toLowerCase()}`)
    eventBus.unfadeBG()
    next()
  }
}
</script>

<style scoped>
.modal-desc button {
  display: inline;
}

span.line {
  display: inline-block;
  white-space: pre;
}
</style>
