<template>
  <div class="flex flex-col min-h-screen bg-primaryBackground text-primaryText">
    <div class="h-16 p-5">
      <div class="flex flex-row justify-between">
        <div class="text-2xl">Asset Manager</div>
        <div>
          <UserMenuComponent />
        </div>
      </div>
    </div>
    <div class="p-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserMenuComponent from '@/components/user/UserMenuComponent.vue';
export default {
  components: {
    UserMenuComponent
}
}
</script>
