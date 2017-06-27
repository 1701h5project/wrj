var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');
var multer = require ('multer');
var bodyParser = require('body-parser');
var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, 'C:/Users/Administrator/Desktop/wrj/web/src/assets/imgs/goods/')  
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
}) 

var upload = multer({ storage: storage })
var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){
    //后台添加商品
    app.post('/upload', upload.fields([{ name: 'imgurl', maxCount: 10 }]), function(request, response) {
        var img=[];
        if(request.files){
            request.files.imgurl.map(function(item,index){
                return img.push(item.filename)
            })
            request.body.imgurl=img;
        }    
        console.log(request.body)
        DB.get('goods', {id: request.body.id}, function(result){
            var obj = request.body;
            if(!result.status){
                response.send(result);
            } else {
                var data = result.data;
                if(data[0]){
                    response.send(ApiResult(false, '商品id已登记'));
                } else {
                    DB.insert('goods',obj, function(insertResult){
                        response.send(insertResult);
                    })
                }
            }
        })  
    });
    //后台更新数据
    app.post('/update', upload.fields([{ name: 'imgurl', maxCount: 10 }]), function(request, response) {
        var img=[];
        if(request.files){
            request.files.imgurl.map(function(item,index){
                return img.push(item.filename)
            })
            request.body.imgurl=img;
        }    
            
        DB.update('goods', request.body, function(result){
             response.send(result);
        })  
    });
    //后台删除数据
    app.get('/deldata',function(request,response){
        var obj = request.query;
        DB.del('goods',obj,function(result){
            response.send(result);
        })
    }) 
    // 后台查找数据 
    app.get('/getGoodsdata',function(request,response){
        var obj = request.query;
        DB.get('goods',obj,function(result){
            response.send(result);
        })
    })  
    //后台登录
    app.post('/erplogin', urlencodedParser, function(request, response){
        console.log(request.body)
            DB.erpget('super', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if(data[0].password != request.body.password){
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        response.send(ApiResult(true,'登录成功',data[0].username));
                    }
                }
            })
    });

//----------------------------------------------下面是前台的路由-------------------------------------------------------------
    
    //前端登录   
    app.post('/login', urlencodedParser, function(request, response){
        console.log(request.body)
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
                        response.send(ApiResult(true,'登录成功',data[0].userphone));
                    }
                }
            })
    });
    // 前端注册
     app.post('/register', urlencodedParser, function(request, response){
        console.log(request.body)
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
    }) 

    //获取数据
    app.get('/showData',function(request,response){
        var obj = request.query;
        DB.showData(obj.collection,obj,function(result){
          response.send(result);
        }); 
    });    

    
    //增加数据
    app.post('/showAdd', urlencodedParser, function(request, response){
        // var obj = request.body;
        DB.exists('buycar', request.body,'name', function(result){
            if(result){
                DB.updatedata('buycar',request.body)
                response.send('{state:  true}');
            } else {
                DB.saveData('buycar', request.body);
                response.send('{state: true}');
            }
        })
    })

    //分类页
    app.post('/getclassfiy', urlencodedParser, function(request, response){
        var obj = request.body;
        DB.exist(obj.collection, {} ,[],function(result){
            var arr = []
            result.forEach(function(item,index){                    
                if(item.Classify == request.body.Classify){                 
                    arr.push(item);             
                }       
            })      
            response.send(ApiResult(true, '获取资料成功',arr));       
        })
    });
    //分页获取数据
    app.post('/getgoods',urlencodedParser,function(request,response){
        var obj = request.body;
        DB.limit(obj.collection,request.body,function(result){
          response.send(ApiResult(true, '获取资料成功',result));
        }); 
    }); 
    //购物车
    app.get('/carlist',function(request,response){
        var obj = request.query;
        console.log(request.query)

        DB.carlist('buycar',obj,function(result){
          response.send(result);
        }); 
    });

    //删除商品信息
    app.post('/delGoods',urlencodedParser,function(request,response){
        var obj = request.body
        DB.delGoods('buycar',obj)
    });

     //修改商品数量
    app.post('/setQty',urlencodedParser,function(request,response){
        var obj = request.body
        console.log(obj)
        DB.setQty('buycar',obj)
    })


     
}