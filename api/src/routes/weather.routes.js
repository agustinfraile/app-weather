const { Router } = require("express");
const { getWeather } = require("../controllers/weatherController");

const router = Router();

router.get("/weather", async (req, res) => {
  const { city } = req.query;

  try {
    if (city) {
      const citySelect = await getWeather(city);
      return res.status(200).send(citySelect);
    } else {
        return res.status(404).send('Proporcione un dato valido')
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "La peticion fallo" });
  }
});

module.exports = router;
