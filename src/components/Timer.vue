<template>
  <section>
    <!-- <button v-on:click="startTimer()">Start Timer</button> -->
    <div>Time Elapsed:</div>
    <div>{{ time }}</div>
  </section>
</template>

<script>
export default {
  props: ["isRunning"],
  data() {
    return {
      seconds: 0,
      minutes: 0,
      hours: 0,
      timerTask: null,
      nf: new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2,
      })
    };
  },
  computed: {
    time() {
        if (this.hours > 0){
            return this.hours + ":" + this.nf.format(this.minutes) + ":" + this.nf.format(this.seconds);
        } else if (this.minutes > 0){
            return this.minutes + ":" + this.nf.format(this.seconds);
        } 
        return this.seconds;
    }
  },
  methods: {
    startTimer() {
        if (!this.timerTask){
            this.timerTask = setInterval(this.incrementTime, 1000);
        }
    },
    incrementTime() {
        this.seconds++;
        if (this.seconds >= 60){
            this.seconds -= 60;
            this.minutes++;
        }
        if (this.minutes >= 60){
            this.minutes -= 60;
            this.hours++;
        }
    },
    stopTimer() {
        if (this.timerTask){
            clearInterval(this.timerTask);
            this.timerTask = null;
        }
    }
  },
  updated() {
    if (this.isRunning){
        this.startTimer();
    } else {
        this.stopTimer();
    }
  }
};
</script>

<style scoped>
section {
    display: flex;
    flex-direction: row;
    justify-content:left;
}

div {
    width: 100%
}
</style>