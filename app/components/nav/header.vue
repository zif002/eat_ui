<template>
  <div>
  <Menubar :model="items" class="p-menubar">
      <template #item="{ item }">
         <Button
              variant="link"
              :to="localePath(item.route)"
            >
            {{item.label}}
          </Button>
      </template>
     
  </Menubar>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const localePath = useLocalePath()
  const {t}  = useI18n();
  const items = ref([
    {
        label: t("menu.today"),
        icon: 'pi pi-home',
        route: "/"

    },
    {
        label: t("menu.month"),
        icon: 'pi pi-search',
        route: '/menu',

    },
    
]);
</script>

<style>
  .p-menubar{
    padding: 0;
    justify-self: start
    
  }
</style>