function showQuery()
{
    let query = `Select * from public."user"`;
    return query;
}
function showbyidquery(req)
{
    let query = `Select * from public."user" where id=${req.params.id}`;
    return query;
}
function updateQuery(req)
{
    let user=req.body;
    let query = `UPDATE public."user"
	SET firstname='${user.firstname}', lastname='${user.lastname}', location='${user.location}'
	WHERE id=${req.params.id}`;
    return query;
}
function insertQuery(req)
{
    let user=req.body;
    let query = `insert into public."user"(id, firstname, lastname, location) 
    values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;
    return query;
}
function deleteQuery(req)
{
    let query = `delete from public."user" where id=${req.params.id}`;
    return query;
}
module.exports = {updateQuery,showQuery,showbyidquery,insertQuery,deleteQuery};