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
    }
}