function urlFormat(url, format = "md", describe = new Date().Format('yyyy-MM-dd')) {

  switch (format) {
    case "md":
      return `![](${url})`
      break
    default:
      return url
  }
}

// 给元素绑定可点击复制的功能
// 参数描述：给哪个父元素的要绑定的哪个子元素的哪个属性值作为copy对象，当执行什么事件时
function bindCopy(parent, target, targetAttr, even) {
  $(parent).on(even, target, function (e) {
    // 阻止默认事件
    e.preventDefault();
    e.stopPropagation();
    // 将链接复制到剪切板
    let fileInitUrl = $(e.target).attr(targetAttr)
    navigator.clipboard.writeText(fileInitUrl).then(()=> {
      $(e.target).text("复制成功！\(￣︶￣*\))") //  $(e.target) 表示是点击的对象
    }, ()=> {
      $(e.target).text("复制失败了 (;´༎ຶД༎ຶ`)")  //  $(e.target) 表示是点击的对象
    });
  })

}
// 将字符串转为文本对象
function StringToTextFile(text,fileName) {
  var reader = new FileReader();
  let file = new File([text],fileName ,{
      type: 'text/plain'
  });
  return file;
}
// 读取文本文件
function readTextFile(file, readFun) {
  reader.readAsText(file, 'utf-8');
  reader.onload = function(){
    readFun(reader.result)
  };
}

// 数据格式转换函数
function Base64ToBlob(base64) {
  var arr = base64.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  console.log(new Blob([u8arr], { type: mime }))
  return new Blob([u8arr], { type: mime })
}
function FileToBase64(file,callback) {
  var reader = new FileReader();
  // 传入一个参数对象即可得到基于该参数对象的文本内容
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    // target.result 该属性表示目标对象的DataURL
    callback(e.target.result);
  };
}


