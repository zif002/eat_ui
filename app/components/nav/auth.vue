<template>
 <Menubar :model="items"  class="p-menubar-auth">
      <template #item="{ item }">
          <Button :to="item.route" variant="link">
            {{item.label}}
          </Button>
    
      </template>     
      <template #end>
          <Button v-if="locale === 'ru'" v-tooltip="t('language.tooltip')" variant="link" @click.prevent.stop="changeLanguage('en')">🇬🇧</Button>
          <Button v-if="locale === 'en'" v-tooltip="t('language.tooltip')"  variant="link" @click.prevent.stop="changeLanguage('ru')">🇷🇺</Button>
          <Button v-tooltip="{ value: isDark ? 'Light theme' : 'Dark theme' }" icon="pi pi-palette" :severity="isDark ? '' : 'info'" @click="toggleTheme()"/>
      </template>
  </Menubar>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import { useI18n, useSwitchLocalePath } from '#i18n';
  const switchLocalePath = useSwitchLocalePath();
  const { locale, t } = useI18n()
  const router = useRouter();
  const isDark = ref(false);
  onMounted(() => {
    const theme = localStorage.getItem('theme');
    if(theme) {
        isDark.value = theme === "dark";
        if(theme === "dark") {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    } else {
        const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
         if(darkModeMql) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        isDark.value = !!darkModeMql;
        localStorage.setItem('theme', darkModeMql ? "dark" : "light");
    }
    

  })
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
const toggleTheme = () => {
    const isDarkClass = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkClass ? "dark" : "light");
    isDark.value = isDarkClass
}
</script>

<style>
    .p-menubar-auth{
        justify-self: end
    }
</style>