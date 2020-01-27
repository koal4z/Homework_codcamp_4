module.exports = (app, db) => {
  app.get("/instructor", (req, res) => {
    db.instructor
      .findAll()
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.post("/update-instructor", (req, res) => {
    const name_en = req.body.name_en;
    const name_th = req.body.name_th;
    const academic_rank = req.body.academic_rank;
    const expertise = req.body.expertise;
    const degree = req.body.degree;

    db.instructor
      .create({
        name_en: name_en,
        name_th: name_th,
        academic_rank: academic_rank,
        expertise: expertise,
        degree: degree
      })
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  });

  app.delete("/delete-instructor", (req, res) => {
    db.instructor
      .destroy({ where: { id: req.body.id } })
      .then(result => {
        res.status(200).send("delete complete");
      })
      .catch(err => {
        res.status(400).send(err.message);
      });
  });

  app.put("/update-instructor", (req, res) => {
    const name_en = req.body.name_en;
    const name_th = req.body.name_th;
    const academic_rank = req.body.academic_rank;
    const expertise = req.body.expertise;
    const degree = req.body.degree;

    db.instructor.update(
      {
        name_en: name_en,
        name_th: name_th,
        academic_rank: academic_rank,
        expertise: expertise,
        degree: degree
      },
      { where: { id: req.body.id } }
    ).then(result => {
      res.status(200).send("update complete");
    }).catch(err => {
      res.status(400).send(err.message);
    })
  });
};
