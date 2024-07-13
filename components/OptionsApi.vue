<template>
  <div>
    <h1>{{ title }}</h1>
    <h4>Function : {{ hello() }}</h4>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title:'Options Api'
        }
    },
    methods:{
        hello(){
            return 'Hello from options api!'
        }
    },
    mounted(){
        setTimeout(() => {
           this.title='Hello Options api ' 
        }, 1000)
        
    }

}
</script>

<style>

</style>