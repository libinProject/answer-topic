export default {
  computed: {
  },
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    back () {
      if (this.$router) {
        this.$router.back()
      }
    }
  }
}
