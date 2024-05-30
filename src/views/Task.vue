<template>
  <div class="card" v-if="task.length">
    <h2>{{task[0].name}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task[0].status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task[0].date }}</p>
    <p><strong>Описание</strong>: {{task[0].description}}</p>
    <div>
      <button class="btn" @click="change(id, 'pending')">Взять в работу</button>
      <button class="btn primary" @click="change(id, 'done')">Завершить</button>
      <button class="btn danger" @click="change(id, 'cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{id}}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {mapGetters, mapMutations} from 'vuex'

export default {
  components: {AppStatus},
  computed: {
    ...mapGetters(['tasks']),
    task() {
      return this.tasks.filter((item) => item.id === this.id)
    },
    id() {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapMutations(['changeStatus']),
    change(id, status) {
      this.changeStatus({id, status})
    }
  }
}
</script>

<style scoped>

</style>