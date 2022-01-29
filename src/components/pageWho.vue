<template>
  <div>
    <q-scroll-area
      class="row wrap justify-center items-start content-start"
    >
      <q-img
        :src="require('@/assets/me.jpg')"
        :img-style="{ borderRadius: '10000px' }"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur
        quia possimus? Animi porro eos eveniet excepturi quisquam dolores ex
        quasi quidem accusamus dolore nostrum quam at minus vel ad officia
        labore architecto quis eum vero, aperiam molestias esse pariatur
        voluptatum! Quae sit expedita praesentium! Vitae, molestias error
        officiis cum tenetur dolorum natus odit. Dolorum possimus repellendus,
        obcaecati architecto ex ducimus veritatis rerum atque quae iure ab sed
        molestiae? Ipsum, animi cumque alias distinctio consequuntur tenetur
        dolor? Quis dignissimos nesciunt modi sunt nemo. Consequatur molestias
        eum nemo nulla culpa excepturi vel! Soluta, placeat quae vero laborum
        sit incidunt dolore nobis aspernatur, porro beatae iste perspiciatis
        magni tempora ratione dolores, architecto aliquid? Necessitatibus,
        inventore. Eligendi, consectetur? Porro eos voluptates, repellendus
        labore voluptas consectetur. Dolore unde, nihil ipsam molestias ratione
        saepe dolorem nemo consectetur vel nulla dicta vero sequi doloribus
        omnis maiores libero! Asperiores, cum totam quos voluptatem similique
        molestias iusto iure! Ad minus eveniet dolorem repellendus nulla
        cupiditate beatae excepturi, maxime ex, harum libero ullam quisquam
        molestiae aperiam, eaque necessitatibus voluptatibus ducimus iusto esse
        accusamus quidem. Omnis officia cumque recusandae placeat rem, aliquid
        veniam architecto excepturi laudantium, voluptates nulla commodi optio
        qui perferendis tenetur alias odit voluptatem? Dolore, sit! Unde
        veritatis veniam iste necessitatibus magnam velit aspernatur praesentium
        dolorum! Ab eum, soluta unde ipsam assumenda facilis iure distinctio
        provident sapiente obcaecati, laudantium, quasi velit porro enim modi
        officiis nobis eligendi possimus. Debitis, incidunt adipisci inventore
        eum ex aperiam mollitia officiis temporibus enim excepturi maiores ipsum
        provident nostrum fugiat expedita eaque aliquam nam numquam
        reprehenderit odio doloribus quam cupiditate harum? Vel quo eos
        temporibus magnam nesciunt earum aliquam alias totam dolorem non cumque
        eum debitis accusamus libero at minus, iusto quos quibusdam enim iste
        beatae! Dignissimos veritatis a beatae illo in pariatur at explicabo
        quisquam tempore distinctio, aliquid, modi animi exercitationem sed,
        quaerat rem quo harum deserunt officia. Voluptatem, rerum laboriosam
        mollitia voluptate tempore iure nam? Atque tempore adipisci impedit
        quaerat placeat nisi error laborum quidem assumenda non sapiente
        repellendus ea omnis officia eius, vel tenetur. Vitae labore omnis
        debitis magni dicta ducimus amet quam quas culpa eveniet pariatur
        nostrum dignissimos, nam neque ipsum delectus est laborum dolore
        officiis, suscipit corporis illo, corrupti qui? Ea ducimus, nemo velit
        ullam temporibus beatae, aspernatur exercitationem et adipisci explicabo
        nihil repellat aliquid expedita laborum maxime ipsa voluptas facilis,
        cumque recusandae sunt vel dolore ex quibusdam? Suscipit assumenda, eius
        sapiente et sit impedit dolorem ex reiciendis modi dolorum quod
        temporibus reprehenderit, repudiandae unde dolores blanditiis animi
        quasi facere voluptate sint minus esse. Est aut neque beatae qui
        accusamus doloremque at iste repellat asperiores. Eaque, ullam aut
        aliquid excepturi sed dignissimos laborum voluptas adipisci voluptatibus
        mollitia eius veritatis fuga! Ipsa ipsum magni, quisquam reiciendis
        veritatis odit excepturi dicta odio magnam ratione sequi perspiciatis
        voluptatum, earum aliquam. Rerum consequatur expedita nam ipsa
        consectetur dolor nihil, obcaecati atque repellendus harum quam iure qui
        iste velit molestias saepe totam. Quasi laboriosam voluptates tenetur
        temporibus harum sequi voluptatum quaerat dolore aut assumenda provident
        odit perferendis reiciendis a eius suscipit, culpa obcaecati.
      </p>
    </q-scroll-area>
  </div>
</template>



<style scoped>
.q-scrollarea {
  width: 100%;
  height: 75vh;
}
p {
  border-radius: 100px;
  background-color: #222222;
  margin-top: 100px;
  width: 100%;
  padding: 10vh 5vw;
}
.q-img {
  margin-top: 0px;
  margin-right: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
  float: right;
  width: 30vw;
}
@media (max-width: 600px) {
  .q-img {
      float: left;
      margin: auto;
      margin-right: 5vw;
      margin-left: 5vw;
      width: 50vw;
  }
}
</style>