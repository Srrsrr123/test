<template>
  <div>
    <navigation></navigation>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navigation from "./navigation";
import photo from "./photo";

export default {
  name: "Student",
  components: {
    navigation,
    photo
  }
}
</script>

<style scoped>
#content{
  background-color: darkgray;
  margin-top: -100px;
  margin-left: 15%;
  margin-right: 15%;
}

</style>
