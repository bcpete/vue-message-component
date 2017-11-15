Vue.component('message', {

  props: ['title', 'body'],

  data() {
    return {
      isVisible: true,
    }
  },

  template: 
  `
  <article class="message">
    <div class="message-header">
      {{ title }}
      <button type="button" @click="isVisible = !isVisible">{{ isVisible ? 'Hide' : 'Show'}}</button>
    </div>
    <div class="message-body" v-show="isVisible">
      {{ body }}
    </div>
  </article>
  `,

  methods: {

  }
});

new Vue({
  el: '#root'
});