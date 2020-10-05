<template>
  <div>
        <div class="products">123
            <div v-for="(product, i) in zakazItem" :key="i" class="products__item">
                <Product :product="product"/>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Product from '@/components/Product'

export default {
    name: 'user',
    components: { Product },

    computed: {
        ...mapGetters(['getZakazItem'])
    },

    beforeMount() {
        this.zakazItem()
        console.log(this.getZakazItem)
    },

    methods: {
        ...mapActions(['zakazItem'])
    }
}
</script>
