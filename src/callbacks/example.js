module.exports = {
    select: function(cursor, ps_id){
        cursor.toArray(function(err, items){
            if (err){
                throw err;
            } else {
                console.log(items);
            }
        })
    }
}