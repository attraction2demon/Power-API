module.exports = (request, response, next) => {
    /**
     * Подключаем конфиги
     */
    const config = {
        apipassword: 'mF6G45fXtadgItsSeSXYLK9V1tb2SHuf',
    }
    //console.log(request.headers['authorization'])
  
    try {
  
        var password = config.apipassword
        if(password == config.apipassword){
            next();
        }  else {
            error('Invalid password.', 401);
        }
    } catch {
        response.status(401).json({
            error: 'Invalid request!'
        });
    }
  
    function error(msg, statuscode) {
        response.status(statuscode).json({
            error: msg
        });
    }
  };