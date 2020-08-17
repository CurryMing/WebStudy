<template>
  <div>
    <div class="container" v-show='isShow'>
      <div class="loading">
        <div class="circle"></div>
      </div>
      <p class="title">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data: function(){
    return {
      title: '',
      isShow: true,
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    width: 200px;
    height: 200px;
    border-radius: 20px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .loading{
    width: 80px;
    height: 80px;
    border: 5px solid white;
    border-radius: 50%;
    border-right-color: #000000;
    animation: loading 2s ease-in-out infinite;
  }
  .circle{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #000000;
    animation: circle 2s ease-in-out infinite;
  }
  @keyframes loading{
    from{
      transform: rotateZ(0deg);
    }to{
      transform: rotateZ(360deg);
    }
  }
  @keyframes circle{
    0%{
      transform: scale(0,0);
    }
    50%{
      transform: scale(1,1);
    }
    100%{
      transform: scale(0,0);
    }
  }
  .title{
    font-weight: 600;
    font-family: sans-serif;
    font-size: 25px;
    position: relative;
  }
  .title::after{
    content: '';
    top: 8px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    filter: blur(10px);
    position: absolute;
    animation: titleAfter 4s linear infinite;
  }
  @keyframes titleAfter{
    0%{
      transform: translateX(-100px);
    }
    50%{
      transform: translateX(-25px);
    }
    100%{
      transform: translateX(-100px);
    }
  }
</style>
