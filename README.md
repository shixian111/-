# 表单验证
包含一些普通表单的验证

# 参数配置说明:
      {
      以键值对的方式去配置
      键：要和input的name值保持一致
      值说明：(可选)name:表示输入框的名字  (可选)format:表示要验证的正则表达式   （可选）formatMsg:要是不符合验证要求提示的文字,默认提示[名字]+"格式不正确"
   }

# 使用示例如下：
  Validation.ValidationStatus({"phone":{"name":"手机号","format":/^1[34578]\d{9}$/,"formatMsg":"请输入11位正确的手机号"},"phoneSecurityCode":{"name":"验证码"},"nickname":{"name":"昵称","format":/^[\S]{2,20}$/,"formatMsg":"请输入2-20个字符之间的昵称"},"password":{"name":"密码","format":/^[\S]{7,13}$/,"formatMsg":"请输入8-12位之间的密码"},"repassword":{"name":"再次输入密码","format":/^[\S]{7,13}$/},"formatMsg":"请输入8-12位之间的密码"});
