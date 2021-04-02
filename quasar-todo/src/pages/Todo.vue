<template>
  <q-page class="bg-grey-3">
    <div></div>
   <q-input>
   </q-input>

  </q-page>
</template>

<script>
export default {
    data() {
      return {
        newTask: '',
        tasks: [
          {
            title: 'Get Bananas',
            done: false
          },
          {
            title: 'Eat Bananas',
            done: false
          },
          {
            title: 'Poo Bananas',
            done: false
          }
        ]
      }
    },
    methods: {

    }
}
</script>

 <style>

</style>
