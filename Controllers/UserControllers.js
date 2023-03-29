import fetchUsers from "../Models.js/UserModels";

const getUsers = (request, response, next) => {
    fetchUsers()
    .then((data) => { 
      response.status(200).send({ data });
    })
    .catch((error)=>{
        console.log(error)
    });
}

export default getUsers