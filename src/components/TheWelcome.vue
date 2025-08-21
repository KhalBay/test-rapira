<script setup lang="ts">
import { useRouter } from "vue-router";

const aboutInfo = [
  {
    id: 0,
    text: 'У меня есть четыре кота, вот один из них',
    img: "https://sun9-14.userapi.com/impg/kBuZ8sEHBZ5Qoa8qpf4IuVtFXDDFYZxDrBsHZw/3EprioXv3j8.jpg?size=1215x2160&quality=95&sign=ad3fb5aa2ccddbfbbe442739fb6ce432&type=album",
  },
  {
    id: 1,
    text: 'Здесь я плаваю с женой на сапе',
    img: "https://sun9-52.userapi.com/impg/5kMo4p4TBSB-FgqSnwdU9cQ8WJpxOBCgZ3jdog/bLChMbRX9dU.jpg?size=607x1080&quality=95&sign=b77b2ce3962e55748a4cc1e27fc13814&type=album"
  }
]

const router = useRouter()

const goToTask = async () => {
  await router.push('/blog')
}
</script>

<template>
  <div class="font-mono text-center py-6">
    <p class="text-2xl mb-3">🤚 Привет, меня зовут Егор, а это мое тестовое задание</p>
    <div class="flex gap-6 mb-3">
      <div v-for="item in aboutInfo" :key="item.id" class="flex flex-col items-end flex-1" :class="{'items-start': item.id === aboutInfo.length - 1}">
        <p class="text-4">{{ item.text }}</p>
        <img :src="item.img" alt="Должен быть я" class="welcome__img">
      </div>
    </div>
    <p class="text-3 mb-3">Это я всё к чему: люблю животных и активный отдых 🎉</p>
    <p class="text-3 mb-3">Приятно познакомиться, давайте перейдем к тому, что я сделал</p>
    <button class="cursor-pointer bg-gray-500 text-white p-2 rounded-lg mb-3" @click="goToTask">Задание (тык)💻</button>
    <p class="text-3 mb-3">Пишите <a class="text-blue-400" href="https://telegram.me/KhalBay7">по любому вопросу </a> в Telegram</p>
  </div>
</template>

<style scoped>
.welcome__img {
  width: 212px;
  height: 378px;
}
</style>