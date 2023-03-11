<template>
  <svg viewBox="0 0 24 24">
    <defs>
      <circle
        id="circle"
        cx="12"
        cy="12"
        r="7"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </defs>
    <use xlink:href="#circle" class="bg" />
    <use
      xlink:href="#circle"
      class="icon"
      transform-origin="12 12"
      transform="rotate(-90)"
      stroke-dasharray="35, 150"
    />
  </svg>
</template>

<style scoped>
@keyframes stroke--animation {
    from {
        stroke-dasharray: 0, 150;
    }
    to {
        stroke-dasharray: 35, 150;
    }
}

@keyframes spinner--animation {
    from {
        transform: rotate(-90deg);
    }
    to {
        transform: rotate(270deg);
    }
}

.icon {
    animation-name: stroke--animation, spinner--animation;
    animation-duration: 0.5s, 0.75s;
    animation-delay: 0s, 0.5s;
    animation-timing-function: linear, linear;
    animation-iteration-count: 1, infinite;
}

@keyframes bg--animation {
    from {
        opacity: 0;
    }
    to {
        opacity: 0.2;
    }
}

.bg {
    animation: 0.75s linear 1 both bg--animation;
    animation-delay: 0.5s;
}
</style>
