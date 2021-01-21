const { nextTick } = require("process");

class FormatController {
    formatHealthResponse(req, res) {
        var health = {message: 'Server is up and healthy'}
        res.send(health);
    }
}

module.exports = new FormatController;