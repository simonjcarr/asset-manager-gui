<template>
  <div class="flex flex-col min-h-screen bg-primaryBackground text-primaryText">
    <div class="text-2xl">This is the header</div>
    <div class="p-5">
      <div data-netlify-identity-menu></div>
      <router-view></router-view>
    </div>
  </div>
</template>
