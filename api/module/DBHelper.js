var ApiResult = require('./ApiResult')

var MongoDB = require('mongodb');
var MongoDBServer = new MongoDB.Server('localhost', 27017);
var db = new MongoDB.Db('wrj', MongoDBServer);
db.open(function(err,db){
    if(err)throw err;
    console.info('mongodb connected');
});
module.exports = {
    get: function(_collection, _condition, _callback){
        // db.open(function(dberror){
        //     if(dberror){
        //         _callback(ApiResult(false, null, dberror));
        //         return;
        //     }
            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                var condition = _condition || {};
                collection.find(condition).toArray(function(resulterror, dataset){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));    
                    } else {
                        _callback(ApiResult(true, null, dataset));
                    }
                })
            })
        //     db.close();
        // })
    },
    erpget: function(_collection, _condition, _callback){
        // db.open(function(dberror){
        //     if(dberror){
        //         _callback(ApiResult(false, null, dberror));
        //         return;
        //     }
            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                var condition = _condition || {};
                collection.find(condition).toArray(function(resulterror, dataset){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));    
                    } else {
                        _callback(ApiResult(true, null, dataset));
                    }
                })
            })
        //     db.close();
        // })
    },
    insert: function(_collection, _newdata, _callback){
        // db.open(function(dberror){
        //     if(dberror){
        //         _callback(ApiResult(false, null, dberror));
        //         return;
        //     }

            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                collection.insert(_newdata, function(resulterror, result){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));
                    } else {
                        _callback(ApiResult(true, '添加成功', result));
                    }
                })
            })
        //     db.close();
        // })
    },
    update:function(_collection, _condition, _callback){
        // db.open(function(dberror){
        //     if(dberror){
        //         _callback(ApiResult(false, null, dberror));
        //         return;
        //     }
            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                var condition = _condition || {};
                console.log(condition.id)
                collection.update({'id':condition.id},{$set:condition},function(resulterror,result){
                    if(resulterror){
                        _callback(ApiResult(false, '修改失败', resulterror));
                    } else {
                        _callback(ApiResult(true, '修改成功', result));
                    }
                })
            })
        //     db.close();
        // })
    },
    del:function(_collection, _condition, _callback){
        db.collection(_collection, function(collerror, collection){
            if(collerror){
                _callback(ApiResult(false, null, collerror));
                return;
            }
            var condition = _condition || {};
            console.log(condition.id)
            collection.remove({'id':condition.id},function(resulterror,result){
                if(resulterror){
                    _callback(ApiResult(false, '删除失败', resulterror));
                } else {
                    _callback(ApiResult(true, '删除成功', result));
                }
            })
        })
    },
    
//--------------------------------------------下面是前端的数据库处理-------------
    //判断是否存在
    exists : function(_collection, data, key, callback){
        // db.open(function(error, db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    var obj = {};
                    obj[key] = data[key];
                    collection.find(obj).toArray(function(err, docs){
                        callback(docs[0])
                    });
                }
                //db.close();
            })
        //})  
    },
    //获取数据
    showData : function(_collection,data,callback){
        // db.open(function(error,db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                console.log(_collection)
                if(error){
                    console.log(error)
                } else {
                    if(data.id != null ){
                        var str = data.id;
                        var arr = str.split(',');
                        db.collection(data.collection,function(error,collection){
                            collection.find({id:{$in: arr}}).toArray(function(error,shops){
                                callback(shops);
                            });
                        })                      
                    }
                    else if(data.name != null){
                        var str = data.name;
                        db.collection(data.collection,function(error,collection){
                            collection.find( { name: { $regex: str, $options: 'i' } } ).toArray(function(error,shops){
                                callback(shops);
                            });
                        })
                    }
                    else if(data.page != null){
                        var num = data.page - 1;
                        db.collection(data.collection,function(error,collection){
                            collection.find().limit(5).skip(num*5).toArray(function(error,shops){
                                // console.log(shops);
                                callback(shops);
                            })
                        })

                    }
                    else if(data.id == null && data.name == null){
                        db.collection(data.collection,function(error,collection){
                            collection.find().limit(100).toArray(function(error,shops){
                                // console.log(shops);
                                callback(shops);
                            })
                        })          
                    }


                }
               // db.close();
            })      
        //})
    },
    exist:function(_collection, data, arr, callback){
            var obj = {};
            arr.forEach(function (ele) {
                obj[ele] = data[ele]? data[ele] : '';
            });       
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)
                } else {
                    collection.find(obj).toArray(function(err, docs){
                        callback(docs);
                    });
                }
            });
    },
 
    limit:function(_collection, data, callback){
        var num,page;
        db.collection(_collection,function(error,collection){
            collection.count(function(err,count){  
                num = count;
            });
            if(data.page){
                page = data.page
            }else{page=1};
            //console.log(Math.ceil(num/data.num)) ;
            collection.find().limit(parseInt(data.num)).skip(data.num*(page-1)).toArray(function(error,result){
                callback(result);
            });
        }); 
    },
    //添加数据
    saveData : function(_collection, data){
        // db.open(function(error, db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    // console.log(123,data)
                    collection.insert(data);
                }
                //db.close();
            })
        //})
    },
     //更新数据
    updatedata : function(_collection, data){
        // db.open(function(error, db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    // collection.remove({id:data.id},true);
                    // collection.insert(data);
                    data.qty++
                    collection.update({name:data.name},data);
                }
               // db.close();
            })
        //})
    },


    //购物车
    carlist:function(_collection,data,callback){
         db.collection(_collection, function(error, collection){
            if(error){
                console.log(error)
            } else {
                collection.find(data).toArray(function(err, docs){
                    callback(docs);
                });
            }
        });
    },

    //删除用户商品信息
    delGoods:function(_collection,data,callback){
        console.log(data)
         db.collection(_collection, function(error, collection){
            if(error){
                console.log(error)
            } else {
                collection.remove(data)
            }
        });
    },

    //改变用户商品数量
    setQty:function(_collection,data,callback){
        console.log(data)
         db.collection(_collection, function(error, collection){
            if(error){
                console.log(error)
            } else {
                 collection.update({"name":data.name},{"$set":{"qty":data.qty}})
            }
        });
    }
}