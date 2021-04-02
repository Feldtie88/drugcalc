<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
   <q-input
   v-model.number="model"
   type="number"
   @keyup.enter="addTask"
   square
   filled
   bg-color="white" 
   style="max-width: 200px" 
   dense>
        <template v-slot:append>
          <q-btn 
          @click="addTask"
          round 
          dense 
          flat 
          icon="add" />
        </template>
      </q-input>
       <q-input
      v-model.number="model"
      type="number"
      square
      filled
      bg-color='white'
      style="max-width: 200px"
    />

    </div>
     <q-list 
     class="bg-white"
     separator
     bordered>
      <q-item
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done bg-blue-4' : task.done}"
        clickable
        v-ripple>
        <q-item-section avatar>
          <q-checkbox 
          v-model="task.done" 
          class="no-pointer-events"
          color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section
          v-if="task.done"
          side>
          <q-btn
          @click.stop="deleteTask(index)"
           flat 
           round
           dense 
           color="primary" 
           icon="calculate" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
    data() {
      return {
        newTask: '',
        tasks: [
         // {
         //   title: 'Get Bananas',
         //   done: false
         // },
         // {
         //   title: 'Eat Bananas',
         //   done: false
         // },
         // {
        //    title: 'Poo Bananas',
         //   done: false
        //  }
        ]
      }
    },
    methods: {
    
    }
}
</script>

<style lang="scss">
  .done {
    .q-item__label {
      text-decoration: line-through; 
      color: gray
    }
  }
  .no-tasks {
      opacity: 0.5;
  }
  

</style>