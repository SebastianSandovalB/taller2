<template>
  <v-container>
    <div v-for="task in allTasks" :key="task.id">
      <TaskItem :task="task"/>
    </div>
  </v-container>
</template>

<script>
import TaskItem from "@/components/TaskItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "TaskList",

  components: {
    TaskItem,
  },

  computed: {
    ...mapGetters(["allTasks"]),
  },

  data: () => ({}),
};
</script>