class BearController {
  constructor(router, Bear) {
    this.router = router;
    this.Bear = Bear;

    this.init();
  }

  init() {
    this.router.route('/bears')

      .post((req, res)=> {

        this.Bear.name = req.body.name;  // set the bears name (comes from the request)
        this.Bear.save(err=> {
          if (err) {
            res.send(err);
          }

          res.json({message: 'Bear created!'});
        });

      })

      .get((req, res)=> {

        this.Bear.find((err, bears)=> {
          if (err) {
            res.send(err);
          }

          res.json(bears);
        });
      });

    this.router.route('/bears/:bear_id')

      .get((req, res)=> {
        this.Bear.findById(req.params.bear_id, (err, bear)=> {
          if (err) {
            res.send(err);
          }

          res.json(bear);
        });
      });
  }
}

export default BearController;
