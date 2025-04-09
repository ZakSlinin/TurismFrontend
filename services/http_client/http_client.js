import {HTTP_request} from "../requests/http_request.js"

export class HTTP_client {
    constructor() {
        this.http = new HTTP_request()

        this.link_to_change = '127.0.0.1:8001'
        this.change_to = 'http://kringeproduction.ru'

        this.attractionAPI = 'http://kringeproduction.ru/attractions/api/'
        this.objectAPI = 'http://kringeproduction.ru/objects/api/?tags=NaN'
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

    async postObjects(name, address, description, map, tags, image, price, time) {
        let form = JSON.stringify({
            "name": name,
            "address": address,
            "description": description,
            "map": map,
            "image": image,
            "price": price,
            "time": time
        })

        this.http.post(this.link_to_change, form, {
            'Content-Type': 'application/json',
        })
    }

    async getByURL(url) {
        return await this.http.get(url)
    }

    async getAttractions(...tags) {
        return await this.http.get(`${this.attractionAPI}?tags=${this.tagsParser(...tags)}`)
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

    fileParser(link) {
        link = link.replace(this.link_to_change, this.change_to)
        return link
    }

    async getCollections() {
        return await this.http.get(this.compilationsApi)
    }
}