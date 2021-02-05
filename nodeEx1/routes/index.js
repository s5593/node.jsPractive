module.exports = function(app, Image)
{
    // GET ALL InfoS
    app.get('/api/images', function(req,res){
        console.log('탐색중');
        Image.find(function(err, images){
            if(err) return res.status(500).send({error: 'database failure'});
            console.log('탐색완료');
            res.json(images);
        })
    });

    // GET SINGLE Info
    app.get('/api/images/:name', function(req, res){
        console.log('검색중');
        Image.findOne({name: req.params.name}, {
            _id: 0, name: 1, email: 2, path: 3, type: 4, result: 5
        },function(err, images){
            if(err) return res.status(500).json({error: err});
            if(!images) return res.status(404).json({error: 'Info not found'});
            console.log('검색완료');
            res.json(images);
        })
    });

    // GET Info BY AUTHOR
    app.get('/api/images/email/:email', function(req, res){
        console.log('검색중');
        Image.find({email: req.params.email}, {
            _id: 0, name: 1, email: 2, path: 3, type: 4, result: 5
        },  function(err, Image){
            if(err) return res.status(500).json({error: err});
            if(Image.length === 0) return res.status(404).json({error: 'Info not found'});
            console.log('검색완료');
            res.json(Image);
        })
    });

    // CREATE Info
    app.post('/api/images', function(req, res){
        console.log('추가중');
        var image = new Image();
        image.email = req.body.email;
        image.path = req.body.path;
        image.type = req.body.type;
        image.result = req.body.result;

        image.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                console.log("fialed")
                return;
            }
            res.json({result: 1});
            console.log("추가완료")
        });
    });

    // UPDATE THE Info
    app.put('/api/images/:name', function(req, res){
        console.log('수정중');
        Image.findOne({name: req.params.name}, function(err, Image){
            if(err) return res.status(500).json({ error: 'database failure' });
            if(!Image) return res.status(404).json({ error: 'Image not found' });

            if(req.body.email) Image.email = req.body.email;
            if(req.body.path) Image.path = req.body.path;
            if(req.body.type) Image.type = req.body.type;
            if(req.body.result) Image.result = req.body.result;

            Image.save(function(err){
                if(err) res.status(500).json({error: 'failed to update'});
                console.log('수정완료');
                res.json({message: '수정 완료'});
            });
    
        });
    });

    // DELETE Info
    app.delete('/api/images/:name', function(req, res){
        console.log('삭제중');
        Image.deleteOne({ name: req.params.name }, function(err, Image){
            if(err) return res.status(500).json({ error: "database failure" });
            if(Image.deletedCount == 0) return res.status(404).json({ error: 'Image not found' });
            
            res.json({ message: "삭제 완료" });
            console.log('삭제완료');
            res.status(204).end();
        })
    });
}
