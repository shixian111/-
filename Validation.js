/*****校验用户填入的值是不是正确的*****/
var Validation={
    /******
     * 参数配置说明:
     * {
   *    以键值对的方式去配置
   *    键：要和input的name值保持一致
   *    值说明：(可选)name:表示输入框的名字  (可选)format:表示要验证的正则表达式   （可选）formatMsg:要是不符合验证要求提示的文字,默认提示[名字]+"格式不正确"
   * }
     * ****/
    ValidationStatus:function(inputMap){
        $('input').bind('input porpertychange',inputMap,function(event){
            var map=event.data;
            var $me=$(this);
            var tips='';
            //console.log(map[this.name].format);
            if(!($me.val())){
               tips=`<span style="color:red;padding-top:3px;">${map[this.name].name||''}不能为空！</span>`;
            }
            if(map[this.name].format&&!((map[this.name].format).test($me.val()))){
                tips=`<span style="color:red;padding-top:3px;">${map[this.name].formatMsg||map[this.name].name+'格式不正确'}</span>`;
            }
            $me.siblings().empty();
            $me.parent().append(tips);
        });
    }
};
