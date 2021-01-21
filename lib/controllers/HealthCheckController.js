

class HealthCheckController {
    async checkHealth(req,res,next){
        if(req) {
            next();
        }
    }
}

module.exports = new HealthCheckController;