<template>
  <div id="app">
    <v-header :seller="seller"/>
    <header-detail :seller="seller" />
  </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'
  import HeaderDetail from 'components/header-detail/header-detail'
  import { getSeller } from 'api/index'

  export default {
    name: 'app',
    components: {
      HeaderDetail,
      VHeader
    },
    created () {
      this._getSeller()
    },
    data() {
      return {
        seller: {}
      }
    },
    methods: {
      _getSeller() {
        getSeller().then(seller => {
          this.seller = seller
        })
      }
    }
  }
</script>

<style lang="stylus">

</style>
