import { throwIfNotSuccess, headers } from './helper';

const URI = 'api/admin/context';

function fetchAll() {
    return fetch(URI, { credentials: 'include' })
        .then(throwIfNotSuccess)
        .then(response => response.json());
}

function create(contextField) {
    return fetch(URI, {
        method: 'POST',
        headers,
        body: JSON.stringify(contextField),
        credentials: 'include',
    }).then(throwIfNotSuccess);
}

function update(contextField) {
    return fetch(`${URI}/${contextField.name}`, {
        method: 'put',
        headers,
        body: JSON.stringify(contextField),
        credentials: 'include',
    }).then(throwIfNotSuccess);
}

function remove(contextField) {
    return fetch(`${URI}/${contextField.name}`, {
        method: 'DELETE',
        headers,
        credentials: 'include',
    }).then(throwIfNotSuccess);
}

export default {
    fetchAll,
    create,
    update,
    remove,
};