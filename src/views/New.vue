<template>
  <form class="card" @submit.prevent="submitHandler">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="name">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      name: '',
      date: '',
      description: ''
    }
  },
  computed: {
    isValid() {
      return this.name.length && this.date.length && this.description.length
    },
    getTimestamp() {
      return this.date && new Date(this.date).getTime()
    },
    getDate() {
      return this.date && new Intl.DateTimeFormat('ru-RU').format(new Date(this.date).getTime())
    }
  },
  methods: {
    ...mapMutations(['addTask']),
    submitHandler() {
      if(this.isValid) {
        this.addTask({
          id: Date.now().toString(),
          name: this.name,
          date: this.getDate,
          description: this.description,
          status: this.getTimestamp > new Date().getTime() ? 'active' : 'cancelled'
        })
        this.$router.push('/')
      }
    }
  }
}
</script>