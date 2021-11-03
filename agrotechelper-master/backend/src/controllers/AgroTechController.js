
const { PythonShell } = require("python-shell");

module.exports = {
  async busca (req, res)  {
    let options = {
      mode: "text",
      pythonPath: "python",
      pythonOptions: ["-u"], // get print results in real-time
      scriptPath: "./src/bots",
      args: [
        req.body.codigo
      ],
    };
    PythonShell.run('bot4.py', options, function(err, results) {
      if (err) console.log(err);
      console.log(results)
      return res.send({valor: results[0], data: results[1], variacao: results[2]})
    })
  },
};
