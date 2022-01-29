<template>
  <q-carousel
    :modelValue="value"
    transition-prev="scale"
    transition-next="scale"
    animated
    padding
    height="60vh"
    class="bg-primary text-white shadow-1 rounded-borders"
  >
    <q-carousel-slide name="1" class="column no-wrap flex-center">
      <q-scroll-area style="height: 100%; width: 100%">
        <div>
          <q-card dark bordered class="a" v-for="i in Array(5).keys()" :key="i">
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by asda</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              tempora, ad adipisci atque accusamus modi culpa repellat error!
              Qui pariatur expedita nostrum consequuntur omnis necessitatibus,
              natus sapiente voluptate voluptas vel dolores asperiores quod
              aperiam quasi voluptatem aut ea. Tenetur asperiores omnis
              quibusdam itaque dolorum nostrum quas deserunt aspernatur a
              ducimus nesciunt, quae ipsam architecto quidem saepe animi odio
              autem cupiditate modi eaque vero similique fugiat non distinctio.
              Expedita, a? Hic, incidunt? Totam quidem aspernatur aliquam
              voluptate corporis laudantium rem sit quo consequatur, fugiat
              dicta temporibus placeat beatae quaerat, tempora blanditiis eum
              dolorum, officia maiores quia accusamus quis optio. Est, eaque.
            </q-card-section>
          </q-card>
        </div>
      </q-scroll-area>
    </q-carousel-slide>
    <q-carousel-slide name="2" class="column no-wrap flex-center">
      <q-scroll-area style="height: 100%; width: 100%">
        <div>
          <q-card dark bordered class="a" v-for="i in Array(5).keys()" :key="i">
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by asdasdasd</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              tempora, ad adipisci atque accusamus modi culpa repellat error!
              Qui pariatur expedita nostrum consequuntur omnis necessitatibus,
              natus sapiente voluptate voluptas vel dolores asperiores quod
              aperiam quasi voluptatem aut ea. Tenetur asperiores omnis
              quibusdam itaque dolorum nostrum quas deserunt aspernatur a
              ducimus nesciunt, quae ipsam architecto quidem saepe animi odio
              autem cupiditate modi eaque vero similique fugiat non distinctio.
              Expedita, a? Hic, incidunt? Totam quidem aspernatur aliquam
              voluptate corporis laudantium rem sit quo consequatur, fugiat
              dicta temporibus placeat beatae quaerat, tempora blanditiis eum
              dolorum, officia maiores quia accusamus quis optio. Est, eaque.
            </q-card-section>
          </q-card>
        </div>
      </q-scroll-area>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style scoped>
.a {
  margin: 10px 0px;
}
</style>