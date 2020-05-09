const sql = require('mssql');
const config = require('../config');


actorsController = () => {
    get = async (request, response) => {
        try{
            let query = request.params.Id > 0
            ? `EXEC GetActorById ${request.params.Id}`
            : 'EXEC GetActors';
            
            await sql.connect(config);
            const result = await sql.query(query);
    
            const records = result.recordset.map((record) => {
                record.links = {};
                record.links.self = `http://${request.headers.host}/api/actors/${record.Id}`;
                return record;
               });

               if(records.length == 0) {
                   response.status(404);
                   return response.send('Could not find the resource.');
               }

               return response.json(records);
            
        }
        catch (err) {
            return response.status(404);
        }
    };

    return { get };

}



module.exports = actorsController;