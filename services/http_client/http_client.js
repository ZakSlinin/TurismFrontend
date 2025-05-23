import {HTTP_request} from "../requests/http_request.js"

export class HTTP_client {
    constructor() {
        this.http = new HTTP_request()

        this.link_to_change = 'http://127.0.0.1:8000'
        this.change_to = 'http://kringeproduction.ru/files'

        this.attractionAPI = 'http://kringeproduction.ru/attractions/api/'
        this.objectAPI = 'http://kringeproduction.ru/objects/api/'
        this.compilationsApi = 'http://kringeproduction.ru/compilations/api/'

        this.files = '/files/images/5000.jpg'
    }


    tagsParser(...tags) {
        let tagsData = ''

        if (tags.at(0) === undefined) {
            tagsData = 'NaN'
        } else {
            tagsData = tags
        }

        return tagsData
    }

    async postObjects(form) {
        return await this.http.post(this.objectAPI, form)
    }

    async postAttractions(form) {
        return await this.http.post(this.attractionAPI, form)
    }

    async getAttractions(...tags) {
        return await this.http.get(`${this.attractionAPI}?tags=${this.tagsParser(...tags)}`)
    }

    async getSelfAttraction(id) {
        return await this.http.get(`${this.attractionAPI}${id}/`)
    }

    async searchAttractionsByName(name, ...tags) {
        if (name === '') {
            throw new Error('No name selected')
        } else {
            return await this.http.get(`${this.attractionAPI}?tags=${this.tagsParser(...tags)}&name=${name}`)
        }
    }

    async getObject(...tags) {
        return await this.http.get(`${this.objectAPI}?tags=${this.tagsParser(...tags)}`)
    }

    async getSelfObjectData(id) {
        return await this.http.get(`${this.objectAPI}${id}/`)
    }

    fileParser(link) {
        link = link.replace(this.link_to_change, this.change_to)
        return link
    }

    async getCollections() {
        return await this.http.get(this.compilationsApi)
    }

    async delObject(id) {
        return await this.http.delete(`${this.objectAPI}${id}/`)
    }

    async delAttraction(id) {
        return await this.http.delete(`${this.attractionAPI}${id}/`)
    }

}