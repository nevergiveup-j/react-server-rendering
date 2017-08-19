import axios from 'axios'
import { isDebug } from 'config/env'

class DataService {
    constructor(config) {
        console.log(isDebug)

        config = Object.assign(config, {
            baseURL: ''
        })

        this.client = axios.create(config)
    }
}