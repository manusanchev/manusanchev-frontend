<template>
  <div class="ms-writings">
    <article><header><h1><code>La nueva moda: &#x27;Build in public&#x27;</code> o como crecer a base de ser sincero</h1></header><div class="page-body"><p>
    </p><p>¿Alguna vez te han dicho que tu idea no vale nada?. Hace un tiempo, yo pensaba justo lo contrario. Realmente, todas las ideas que llegaban a mi cabeza en forma de proyectos capaces de quitarle el puesto a <a href="https://www.bbc.com/mundo/noticias-46802529">amazon </a>las escondía en mi baúl secreto, para el momento exacto donde pudiese dar uso a mi experiencia como desarrollador web, ni que decir queda, que esos proyectos nunca salieron a la luz, de hecho, lo mas curioso es que ni si quiera comencé a desarrollarlos y aun están guardados en la cajita de las ideas.</p><p>
    </p><p>
    </p><p>Un día navegando por Twitter, esa red social tan fantástica donde todos los desarrolladores parecen ser productivos 24 horas al día y los 7 días de la semana, donde te dejan como un ser improductivo por no estar sacando 54 proyectos el fin de semana o simplemente creando tu startup de éxito, me encontré con un <a href="https://twitter.com/jacintofleta/status/1476989569165844482">tweet</a>  que realmente me dejó un poco fascinado. Resulta que había gente construyendo <a href="https://blog.hotmart.com/es/que-es-una-startup/">startups</a> de forma publica, comentando cada paso, cada estrategia, cada decisión, totalmente a ojo de cualquiera que pasara por delante. Eso en definitiva rompe con el mito de que las ideas lo son todo en un negocio, así que me puse a indagar e investigar como buen informático.</p><p>
    </p><p>Resulta que hay toda una comunidad en redes sociales, de gente dedicada a ello mismo, construir sus productos en publico, un ejemplo claro es <a href="https://www.indiehackers.com/">IndieHackers</a> (Que si tienes un código de invitación, ponte en contacto conmigo, guiño guiño), donde no solo puedes encontrar a gente construyendo en publico, sino a gente intentando construir un producto de éxito que les permita conseguir la libertad financiera, pero eso es otro tema, aquí hemos venido a hablar de <del>mi libro </del> la gente que construye en publico. </p><p>
    </p><p>Realmente el hecho de construir sus productos o startups en publico, les estaba dando cierta visibilidad, trafico que posteriormente acababa en sus aplicaciones y que indirecta o directamente se convertían en posibles compradores. Mataba de raiz la creencia de que las ideas valen oro, estaban exponiendo sus ideas, su forma de hacer las cosas, su metodología, a cambio de generar trafico y ganar dinero.</p><p>
    </p><p>Aunque no es oro todo lo que reluce, realmente, hay desventajas en todo esto, y es que cada cosa que esta gente construya en publico, llevará su imagen como señal distintiva en todos ellos, por lo que cualquier cagada en publico repercutirá directamente en todos aquellos productos que han desarrollado en publico. Estas realmente, siendo condicionado por mostrar una imagen publica de ti lo mas aceptable posible para los demás.</p><p>
    </p><p>En definitiva, como todo en esta vida, hay ventajas y desventajas, quizás me haya saltado alguna que otra ventaja o desventaja, de momento son las que he podido apreciar. Al final de todo, solo estoy escribiendo este articulo para decirte que en este web voy a subir todos los proyectos que haga, acompañado de una explicación del proceso, tecnologias que he usado y un sin fin de historias mas que no vienen hoy al caso. Creare proyectos o startups, un poco imitando el estilo de build in public pero mas discreto, porque simplemente no me apetece dar expectaculo a cambio de que me des un simple click en una de mis aplicaciones.</p><p>
    </p><p>Un saludo, se despide Manuel. Feliz dia.</p><p>
    </p><p>
    </p><p>
    </p><p>
    </p></div></article>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  head: {
    title: "✅ Experiencias en desarrollo web | Manuel Sanchez",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '"Si estas aprendiendo a programar o ya tienes experiencia senior, te invito a leer lo que escribo, quizas aprendamos algo nuevo juntos. ✅ Hablo sobre Tecnologia ✅"'
      },
    ],
  }
})
</script>

<style scoped>

.ms-writings {
  @apply mx-4 text-white;
}
@screen md {
  .ms-writings {
    @apply w-3/4 mx-auto;
  }
}
@screen lg {
  .ms-writings {
    @apply w-2/3 mx-auto text-white;
  }
}
h1 {
  @apply text-3xl text-center py-8 font-bold;
}
@screen lg {
  h1 {
    @apply text-6xl text-center py-8 font-bold;
  }

}
p {
  @apply text-xl py-2 font-sans leading-8;
}
@screen lg {
  p {
    @apply text-2xl py-3 font-sans leading-relaxed;
  }

}
a {
  @apply font-semibold bg-indigo-800 rounded px-2;
  font-family: Impact, sans-serif;
}
</style>