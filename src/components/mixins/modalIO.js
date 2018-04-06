import { eventBus } from './../../main'

export const modalIO = {
  methods: {
    fadeBG (event) {
      eventBus.fadeBG()
    },
    unfadeBG (event) {
      eventBus.unfadeBG()
      this.$router.push('/')
      document.querySelector('body').classList.remove('v--modal-block-scroll')
    }
  }
}
