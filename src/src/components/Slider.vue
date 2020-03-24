<template>
	<div>
	<b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide
      class="imagen-prueba"
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://marinedacity.com/blog/wp-content/uploads/2015/09/Helados-Il-Buon-Gusto-1024x480.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://www.siparum.com/wp-content/uploads/helado-ron-02-1024x480.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://www.siparum.com/wp-content/uploads/helado-ron-03-1024x480.jpg"></b-carousel-slide>

  </b-carousel>

  </div>
</template>


<script>

	export default {
  data(){
    return{
    	slide: 0,
        sliding: null

    }
  },

  methods:{
  	onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
  }
}
</script>

<style>
</style>