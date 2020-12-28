import Mock from 'mockjs'

var data = require('./data.json')
Mock.mock('http://localhost:8080/data', data)
