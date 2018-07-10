<template>
    <div class="container">
      <input class="userInput" v-model="phoneNumber" type="text" placeholder="请输入手机号" autofocus>
      <input class="userInput" v-model="checkCode" type="text" placeholder="请输入验证码">
      <p class="tips">{{tips}}</p>
      <button class="sign" @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        name: "user",
        data(){
          return{
            phoneNumber: '',
            checkCode: '',
            tips:''
          }
        },
        methods: {
          login(){
            if(this.phoneNumber==''){
              this.tips = '手机号码不能为空';
            }else if(this.checkPhone(this.phoneNumber)){
              this.tips = '';

              if(this.checkCode==''){
                this.tips = '验证码不能为空';
              }else{
                this.tips = '';
              }

            }else{
              this.tips = '手机号错误'
            }

            if(this.tips == ''){
              let phoneNumber = this.phoneNumber;
              this.$router.push({ name: 'home', params: { phoneNumber }});
            }
          },
          checkPhone(str){
            var pattern = /^1[34578]\d{9}$/;
            if (pattern.test(str)) {
              return true;
            }
            return false;
          }
        }
    }
</script>

<style scoped lang="less">
  .container{
    text-align: center;
    height: 800px;

    .userInput {
      width: 313px;
      height: 34px;
      color: #555;
      background: transparent;
      border: 1px solid #ccc;
      border-top: none;
      margin: 20px 0;
      padding: 0 10px;
      text-align: left;
      font-size: 14px;
      line-height: 1.5;
      outline: none;
    }

    .sign{
      height: 38px;
      width: 163px;
      background-color: #fe8233;
      color: #fff;
      border: none;
      border-radius: 36px;
      margin-top: 45px;
      padding: 8px 12px;
      font-size: 15px;
      outline: none;
    }

    .tips{
      color: #f00;
      font-size: 14px;
    }
  }

</style>
