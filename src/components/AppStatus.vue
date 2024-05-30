<template>
  <span :class="['badge', classType]">{{ text }}</span>
</template>

<script>
  export default {
    props: {
      type: String
    },
    data() {
      return {
        classesMap: {
          active: 'primary',
          cancelled: 'danger',
          done: 'primary',
          pending: 'warning'
        },
        textMap: {
          active: 'Активен',
          cancelled: 'Отменен',
          done: 'Завершен',
          pending: 'Выполняется'
        }
      }
    },
    computed: {
      classType() {
        return this.classesMap[this.type]
      },
      text() {
        return this.textMap[this.type]
      }
    }
  }
</script>