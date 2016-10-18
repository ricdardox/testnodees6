/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Message {

    constructor() {

    }

    static isMessage(data) {
        return data.hasOwnProperty('type') && data.hasOwnProperty('message');
    }

    static show(type, message, data = []) {
        return {type, message, data};
    }

}

export default Message;