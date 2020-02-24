'use strict';
const {database}=require('../config/database')

class Order{
	constructor(userId,productId,quantity){
		this.userId=userId;
		this.productId=productId;
		this.quantity=quantity
	}
}