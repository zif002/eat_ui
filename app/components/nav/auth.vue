<template>
 <Menubar :model="items"  class="p-menubar">
      <template #item="{ item }">
          <Button :to="item.route" variant="link">
            {{item.label}}
          </Button>
    
      </template>     
      <template #end>
          <Button v-if="locale === 'ru'" v-tooltip="t('language.tooltip')" variant="link" @click.prevent.stop="changeLanguage('en')">🇬🇧</Button>
          <Button v-if="locale === 'en'" v-tooltip="t('language.tooltip')"  variant="link" @click.prevent.stop="changeLanguage('ru')">🇷🇺</Button>
          
      </template>
  </Menubar>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import { useI18n, useSwitchLocalePath } from '#i18n';
  const switchLocalePath = useSwitchLocalePath();
  const { locale, t } = useI18n()
  const router = useRouter();

  const changeLanguage = async (code: "en" | "ru") => {
   const path = switchLocalePath(code);
  if(path) {
     await router.push(path)
  }
} 
  const items = ref([
    {
        label: t("nav.auth.signin"),
        route: '/login',

    },
    {
        label: t("nav.auth.signup"),
        route: '/signup',

    },
    {
        label: t("nav.auth.signout"),
        command: () => {
          
        }

    },
    {
        label: t("nav.auth.profile"),
        icon: 'pi-user',
        command: () => {
          
        }

    },
]);

</script>

<style>

</style>