 
 //userID=JeoOrCXxyiOFxbYaGL40kw&userPwd=sdFo2ziUw8HyLRKd4i6GAQ&userName=aa
 var parseQuery = function (query) {
            var reg = /([^=&\s]+)[=\s]*([^&\s]*)/g;
            var obj = {};
            while (reg.exec(query)) {
                obj[RegExp.$1] = RegExp.$2;
            }
            console.log(obj)
            return obj;
        }