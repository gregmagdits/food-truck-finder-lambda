const mysql  = require('mysql');

exports.handler = async (event) => {
    // TODO implement

    var connection = mysql.createConnection({
        host     : process.env.HOST,
        user     : process.env.USERNAME,
        password : process.env.PASSWORD,
        database : process.env.DB
    });

    connection.connect();
    const promise = new Promise(function(resolve, reject) {
        connection.query('select id ,\n' +
            'name ,\n' +
            'description ,\n' +
            'tag_line ,\n' +
            'food_truck_establishment_id ,\n' +
            'website ,\n' +
            'photo ,\n' +
            'location ,\n' +
            'created_by ,\n' +
            'created_date ,\n' +
            'modified_by,\n' +
            'modified_date  \n' +
            'FROM food_truck'
            ,  (error, results, fields) => {
                connection.end();
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(results),
                    error: error
                };
                resolve(response);
            }
        )
    });
    return promise;
};
