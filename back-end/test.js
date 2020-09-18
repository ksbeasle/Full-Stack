const assert = require('assert')
const chai = require('chai')
const chaiHttp = require('chai-http') 
const db = require('./utils')
const chalk = require('chalk')
const app = require('./app')

//const mongoose = require('mongoose')
// const nock = require('nock')
// const faker = require('faker')

chai.use(chaiHttp)
const expect = chai.expect;


/* Test gameRoutes */
describe('Test gameRoutes', () => {

    // after(() => {
	// 	return stopServer();
    // });
    
    it('GET: Should get all games inside the DB', async () => {
        var result = await chai.request(app).get('/')
            expect(result).to.have.status(200)
            expect(result.body).to.be.a('array')
            expect(result.body[0]).to.be.a('object')
            expect(result.body[0]).to.include.keys('title', 'platform', 'genre', 'esrb', 'rating')
            //done()
        })

    it('GET: Should get a specific game based on the ID', async () => {
        var result = await chai.request(app).get('/game/5f5d2d6896fb5d54cfda3138')
        console.log(result.body.genre)
        expect(result).to.have.status(200)
        expect(result.body._id).to.equal('5f5d2d6896fb5d54cfda3138')
        expect(result.body.platform[0]._id).to.equal('5f5d2d6896fb5d54cfda3139')
        expect(result.body.platform[0]).to.include.keys('platform')
        expect(result.body.genre[0]._id).to.equal('5f5d2d6896fb5d54cfda313a')
        expect(result.body.genre[0]).to.include.keys('genre')
        expect(result.body).to.be.a('object')
        expect(result.body).to.include.keys('title', 'platform', 'genre', 'esrb', 'rating')
    })

    it('PUT: Should add a game', async () => {
        var result = await chai.request(app).put('/game/add').send({
            "title": "test999",
            "platform": [
              {"platform": "Xbox"}
            ],
            "genre": [ 
               {"genre": "FPS"}
             ],
            "esrb": "esrb",
            "rating": 1
          })
        console.log(result)
    })
    })
