export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    #checkResponce(res) {
        return res.ok
            ? res.json()
            : res.json().then(errorData => Promise.reject(errorData))
    }

    getUserData(userData) {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
            body: JSON.stringify(userData)
        })
            .then(this.#checkResponce)
    }

    editUserProfile(profileData) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(profileData)
        })
            .then(this.#checkResponce)
    }

    editProfileAvatar(avatarData) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatarData)
        })
            .then(this.#checkResponce)
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
        })
            .then(this.#checkResponce)
    }

    addNewCard(cardData) {
        console.log(cardData)
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(cardData)
        })
            .then(this.#checkResponce)
    }


    removeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this.#checkResponce)
    }

    likeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this.#checkResponce)
    }

    unlikeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this.#checkResponce)
    }
}