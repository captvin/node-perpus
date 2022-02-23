const db = require('../../config/connection');
module.exports={
    add:(data,callBack)=>{
        db.query(`insert into tb_anggota set ?`,
        [data],
        (err,result)=>{
            if(err){
                return callBack(err)
            }

            else{
                return callBack(null,result)
            }
        })
    },
    get:(callBack)=>{
        db.query(`select * from tb_anggota`,
        [],
        (err,result)=>{
            if(err){
                return callBack(err)
            }

            else{
                return callBack(null,result)
            }
        })
    },

    getid:(data,callBack)=>{
        db.query(`select * from tb_anggota where kd_anggota = ?`,
        [data],
        (err,result)=>{
            if(err){
                return callBack(err)
            }

            else{
                return callBack(null,result)
            }
        })
    },

    update:(data,callBack)=>{
        db.query(`select * from tb_anggota where kd_anggota=?`,
        [data.kd_anggota],
        (err,results)=>{
            if(err){
                return callBack(err)
            }

            else{
                db.query(`update tb_anggota set ? where kd_anggota = ?`,
                [
                    data,
                    data.kd_anggota
                ]);
                return callBack(null,results[0])
            }
        })
    },

    del:(data,callBack)=>{
        db.query(`select kd_anggota from tb_anggota where kd_anggota = ?`,
        [data],
        (err,result)=>{
            if(err){
                return callBack(err)
            }

            else{
                db.query(`delete from tb_anggota where kd_anggota = ?`,
                [data]);
                return callBack(null,result[0])
            }
        })
    }
    
}