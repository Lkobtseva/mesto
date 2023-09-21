export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    #Responce(res) {
        return res.ok
            ? res.json()
            : res.json().then(errorData => Promise.reject(errorData))
    }

    getUserData(userData) {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
            body: JSON.stringify(userData)
        })
            .then(this.#Responce)
    }

    editUserProfile(profileData) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(profileData)
        })
            .then(this.#Responce)
    }

    editProfileAvatar(avatarData) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatarData)
        })
            .then(this.#Responce)
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
        })
            .then(this.#Responce)
    }

    addNewCard(cardData) {
        console.log(cardData)
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(cardData)
        })
            .then(this.#Responce)
    }


    removeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this.#Responce)
    }

    likeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this.#Responce)
    }

    unlikeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this.#Responce)
    }
}