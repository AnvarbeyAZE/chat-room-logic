
const User = function (name){
  this.name = name;
  this.chatroom = null;
}
User.prototype = {
  send : function(message,to){
    this.chatroom.send(message,this,to);
  },
  recieve : function(message,from){
    console.log(`${from.name} to ${this.name} : ${message}`);
  }

}
const Chatroom = function(){
  let users = {};//list of users

  return {

    register : function(user){
      users[user.name] = user;
      user.chatroom = this;
    },
    send : function(message,from , to){
        if(to){
          //Single user message
          to.recieve(message,from);
        }else{
          //Mass message
          for(key in users){
              if(users[key] !== from){
                users[key].recieve(message,from)
              }
          }

        }
    }
  }

}

const anvarbey  = new User('Anvarbey');
const gunay = new User('Gunay');
const mamed = new User('Mamed');
const mehriban = new User('Mehriban');


const chatRoom = new Chatroom();

chatRoom.register(anvarbey);
chatRoom.register(gunay);
chatRoom.register(mamed);
chatRoom.register(mehriban);


anvarbey.send('Hello dear',gunay);
mamed.send("Hey brother , lets Chill today",anvarbey);

gunay.send("Hi everyone");
