<template>
  <v-app>
    <v-main>
      <ContentBlock/>
    </v-main>

    <v-footer app absolute fixed>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import ContentBlock from './components/ContentBlock';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    ContentBlock,
    Footer
  },
};
</script>
