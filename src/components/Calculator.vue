<template>
  <!-- Welcome to Vue.js Calculator -->
  <!-- Inputs -->
  <div class="section">
    <!-- Dialpad Code over here -->
    <div v-if="view == 'dialpad'">
     <Dialpad />
    </div>
    </div>
</template>
<script>
// Exporting the Calculator
import Dialpad from './Dialpad';

export default {
  name: "Calculator",
  components: {
    Dialpad
  },
  data: () => {
    return {
      x: 0,
      y: 0,
      output: 0,
      view: 'dialpad'
    }
  },
// All the functions go over here
  methods: {
    add() {
      console.log(this.x)
      this.output = parseInt(this.x) + parseInt(this.y);
    },
    minus() {
      this.output = this.x - this.y;
    },
    into() {
      this.output = this.x * this.y;
    },
    divide() {
      this.output = this.x / this.y;
    }
  }
}
</script>
<style>
/*No shadow style down below */
  .no-shadow {
    width: 100%
  }
  /* Copy Paste This*/
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}html{line-height:1}ol,ul{list-style:none}table{border-collapse:collapse;border-spacing:0}caption,th,td{text-align:left;font-weight:normal;vertical-align:middle}q,blockquote{quotes:none}q:before,q:after,blockquote:before,blockquote:after{content:"";content:none}a img{border:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}html,button,input,select,textarea{color:#222}html{font:100% "Lucida Grande", Tahoma, Arial, Verdana, sans-serif;line-height:1.4}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,img,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browsehappy{margin:0px 0px 10px 0px;padding:0.5em 0em;background:#aac739;color:#4f4f4f;text-align:center}body{background:#fff;color:#000}.dialpad .number{position:relative;z-index:2;padding:15px 20px;color:#4d4d4d;font-weight:300;font-size:40px;background:#fff;height:78px}.dialpad .dials{margin:-1px 0 0 -1px;background:#1d1918;cursor:pointer}.dialpad .dials:before,.dialpad .dials:after{content:"\0020";display:block;height:0;overflow:hidden}.dialpad .dials:after{clear:both}.dialpad .dials .digits{float:left;width:33.33%}.dialpad .dials .digits p{font-weight:600;padding:15px 25px;border-top:1px solid #4d4d4d;border-right:1px solid #000;border-bottom:1px solid #000;border-left:1px solid #4d4d4d}.dialpad .dials .digits p strong{font-size:50px;margin-right:8px;color:#fff}.dialpad .dials .digits:active{background:#00caf2;border-top-color:#b2f2ff}.compact .dials .digits p{padding:25px 15px}.compact .dials .digits p strong{font-size:30px}.compact .dials .digits p sup{text-transform:uppercase;color:#c1c1c1}.compact .dials .pad-action{background:#093}.compact .dials .pad-action:active{background:#0c3}.ir{background-color:transparent;border:0;overflow:hidden;*text-indent:-9999px}.ir:before{content:"";display:block;width:0;height:150%}.hidden{display:none !important;visibility:hidden}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.clearfix:before,.clearfix:after{content:" ";display:table}.clearfix:after{clear:both}.clearfix{*zoom:1}

</style>
