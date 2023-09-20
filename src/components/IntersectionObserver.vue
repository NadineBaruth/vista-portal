<template>
  <section ref="section">
    <slot></slot>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "IntersectionObserver",
  data() {
    return {
      isIntersecting: false,
    };
  },
  props: {
    threshold: {
      type: Number,
      default: 0.8,
    },
    customClass: true,
  },
  mounted() {
    if (!this.$refs["section"]) return

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: this.threshold
    }
    const observer = new IntersectionObserver(e => {
      e.forEach(entry => {
        // We need to make our intersection options a little stricter to avoid asynchronous ordering when using the intersection observer in a v-for.
        if (entry.isIntersecting) {
          this.$emit("intersect", e)
          this.$emit("isVisible", true)
        } else {
          this.$emit("isVisible", false)
        }
      })
    }, options)
    // In order to avoid that the method observer is executed too early
    observer.observe(this.$refs["section"])
  },
});
</script>

<style scoped></style>
