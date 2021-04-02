<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

      </q-toolbar>
      <div class="q-px-xl q-pt-xl q-mb-xl">
        <div class="text-h2 text-center text-primary"></div>
      </div>
      <q-img
          src="https://cdn.hipwallpaper.com/i/60/10/eZ0Yfc.png"
          class="header-image absolute-top" />
    </q-header>
      <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="width: 300px; max-width: 100%">
      <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn round dense flat icon="menu" class="q-mr-xs" />
        <q-avatar class="gt-xs">
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
      </q-toolbar>
    </div>
  </div>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="350"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
             to="/"
             exact
             clickable
             v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Beta 2
              </q-item-section>
            </q-item>

          <q-item
           to="/ipratropium"
           exact
           clickable
           v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Ipratropium Bromide
              </q-item-section>
            </q-item>

             <q-item
               to="/activated"
               exact
                clickable
                v-ripple>
                <q-item-section avatar>
                <q-avatar rounded>
                  <img src='https://assets.kogan.com/images/ozdingo/OZD-1454364917840-12594315034704/1-900610f8a9-2kg-oxpure-activated-charcoal-powder-teeth-tooth-whitening-toothpaste-skin-mask-orku.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753'>
                </q-avatar>
              </q-item-section>

              <q-item-section>
                Activated Charcoal
              </q-item-section>
            </q-item>

             <q-item
               to="/dextrose"
               exact
                clickable
                v-ripple>
              <q-item-section avatar>
                <q-avatar rounded>
                  <img src='https://cdn.boundtree.com/btm/products/7520-20_original_96Wx96H_8834289893406'>
                </q-avatar>
              </q-item-section>

              <q-item-section>
                Dextrose 50%
              </q-item-section>
            </q-item>
             <q-item
                to="/glucogel"
                exact
                clickable
                v-ripple>
                <q-item-section avatar>
                <q-avatar rounded>
                  <img src='https://cdn.shopify.com/s/files/1/0268/9111/products/glucogel_small.jpeg?v=1465254942'>
                </q-avatar>
              </q-item-section>

              <q-item-section>
                Glucogel
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://s3.amazonaws.com/libapps/accounts/8434/images/category_147_6637.jpg" style="height: 146px">
          <div class="absolute-bottom bg-transparent">
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  computed: {

    }
  }
</script>

<style lang="scss" scoped>
    .header-image {
      height: 100%;
      z-index: -1;
      opacity: 1;
    }
</style>
