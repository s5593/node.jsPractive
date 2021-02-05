module.exports = function(app, Info)
{
    // GET ALL InfoS
    app.get('/api/infos', function(req,res){
        console.log('1');
        Info.find(function(err, infos){
            console.log('2');
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(Info);
        })
    });

    // GET SINGLE Info
    app.get('/api/infos/:Info_id', function(req, res){
        Info.findOne({_id: req.params.Info_id}, function(err, Info){
            if(err) return res.status(500).json({error: err});
            if(!Info) return res.status(404).json({error: 'Info not found'});
            res.json(Info);
        })
    });

    // GET Info BY AUTHOR
    app.get('/api/infos/id/:id', function(req, res){
        Info.find({id: req.params.id}, {_id: 0, name: 1, id: 2, path: 3},  function(err, Infos){
            if(err) return res.status(500).json({error: err});
            if(Infos.length === 0) return res.status(404).json({error: 'Info not found'});
            res.json(Info);
        })
    });

    // CREATE Info
    app.post('/api/infos', function(req, res){
        var info = new Info();
        info.name = req.body.name;
        info.id = req.body.id;
        info.path = req.body.path;

        info.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                console.log("fialed")
                return;
            }
            res.json({result: 1});
            console.log("success")
        });
    });

    // UPDATE THE Info
    app.put('/api/infos/:info_id', function(req, res){
        Info.findByid(req.params.Info_id, function(err, Info){
            if(err) return res.status(500).json({ error: 'database failure' });
            if(!Info) return res.status(404).json({ error: 'Info not found' });
    
            if(req.body.name) Info.name = req.body.name;
            if(req.body.id) Info.id = req.body.id;
            if(req.body.path) Info.path = req.body.path;
    
            Info.save(function(err){
                if(err) res.status(500).json({error: 'failed to update'});
                res.json({message: 'Info updated'});
            });
    
        });
    });

    // DELETE Info
    app.delete('/api/infos/:info_id', function(req, res){
        Info.remove({ _id: req.params.Info_id }, function(err, output){
            if(err) return res.status(500).json({ error: "database failure" });
            
            res.json({ message: "Info deleted" });
            res.status(204).end();
        })
    });

}