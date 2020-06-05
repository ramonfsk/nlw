import express from 'express';

const app = express();
app.use(express.json());

/**
 *  GET:    Buscar uma ou mais informações do back-end;
 *  POST:   Criar uma nova informação no back-end;
 *  PUT:    Atualizar uma informação existente no back-end;
 *  DELETE: Remover uma informação do back-end;
 * 
 *  Exemplos:
 *  POST -> http://localhost:3333/users = Cria um usuário;
 *  GET  -> http://localhost:3333/users = Lista usuários;
 *  GET  -> http://localhost:3333/users/5 = Busca dados do usuário com id 5
 * 
 * Request Param: Parâmetros que vem na própria rota que identificam um recurso;
 * Query Param: Parâmetros que vem na própria rota, geralmente opcionais para filtros, paginação etc...;
 * Request Body: Parâmetros para criação/atualização de informações; 
 */

const lovers = [
    'Amanda',
    '&',
    'Ramon'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? lovers.filter(user => user.includes(search)) : lovers;

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = lovers[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);