<template>
  <div>
    <div>
      <TaskInput />
    </div>
    <div>
      <TaskList />
    </div>
    <div>
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  </div> 
</template>

<script>
// @ is an alias to /src
import TaskInput from "@/components/TaskInput.vue";
import TaskList from "@/components/TaskList.vue";
import TaskItem from "@/components/TaskItem.vue";

export default {
  name: "LandingPage",
  components: {
    TaskInput, TaskList, TaskItem,
  },
};
</script>