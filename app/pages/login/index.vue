<template>
  <div class="hero">
    <NuxtImg class="hero__image" src="/images/hero.png" height="100%" width="100%"/>
    <div class="hero__content">
      <div class="card flex justify-center">
        <Form v-slot="$form" :initialValues :resolver class="flex flex-col gap-4 w-full sm:w-56" @submit="onFormSubmit">
           <div class="flex flex-col gap-1">
                <InputText name="email" type="text" :placeholder="t('forms.username_placeholder')" fluid />
                <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error.message }}</Message>
            </div>
            <div class="flex flex-col gap-1">
                <Password name="password" :placeholder="t('forms.password_placeholder')" :feedback="false" toggleMask fluid />
                <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
                    <ul class="my-0 px-4 flex flex-col gap-1">
                        <li v-for="(error, index) of $form.password.errors" :key="index">{{ error.message }}</li>
                    </ul>
                </Message>
            </div>
             <div class="flex flex-col gap-1 justify-end">
                <Button type="submit" severity="secondary" :label="t('forms.enter')" />
              </div>
            
        </Form>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { zodResolver } from '@primevue/forms/resolvers/zod';
  import { z } from 'zod';
  
  import { useToast } from 'primevue/usetoast';
  import type { FormSubmitEvent } from '@primevue/forms/form';
  const {t} = useI18n();
  const toast = useToast();
  const initialValues = ref({
      email: '',
      password: ''
  });
  const resolver =  zodResolver(
    z.object({
        email: z.string().email(),
        password: z.string()
          .min(3)
          .max(8)
          
    })
  );
  const onFormSubmit = (ev: FormSubmitEvent) => {
    ev.originalEvent.preventDefault();
    if (ev.valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
</script>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh; 
    place-items: center; 
    position: relative; 
  }
  .hero__image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
  }
  .hero__content {
    z-index: 2;
    color: white;
    text-align: center;
    padding: 1rem;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  }
</style>