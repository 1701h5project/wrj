var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');
var multer = require ('multer');
var bodyParser = require('body-parser');
var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, './upload')  
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
})
var upload = multer({ storage: storage })
var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){
    app.post('/logins', urlencodedParser, function(request, response){ 
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            DB.get('account', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if(data[0].password != request.body.password){
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        response.send(ApiResult(true));
                    }
                }
            })
        }
    });    
    app.post('/login', urlencodedParser, function(request, response){
        if(!request.body || !request.body.userphone){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            DB.get('account', {userphone: request.body.userphone}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if(data[0].password != request.body.password){
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        response.send(ApiResult(true));
                    }
                }
            })
        }
    });
    // 注册
     app.post('/register', urlencodedParser, function(request, response){
        if(!request.body || !request.body.userphone){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        }
        else if(!request.body || !request.body.nickname){
            response.send(ApiResult(false, '昵称不能为空！'));
        }
         else {
            delete request.body.repassword;
            DB.get('account', {userphone: request.body.userphone}, function(result){
                var obj = request.body;
                obj.id = obj.userphone;
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(data[0]){
                        response.send(ApiResult(false, '用户名已被注册'));
                    } else {
                        DB.insert('account',obj, function(insertResult){
                            response.send(insertResult);
                        })
                    }
                }
            })
        }        
    })   
}