import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
    {
    id:1,
    name:'Avani',
    username:'avanijoshi999',
    avatar:'https://scontent.fdel1-1.fna.fbcdn.net/v/t1.0-1/c60.0.240.240/p240x240/19884446_1400854700007333_817344477970801140_n.jpg?oh=8ce422351f1cd905b98b590608f179c2&oe=5A0618F5'
  },
  {
    id:2,
    name:'Apoo',
    username:'apoorv.joshi.14',
    avatar:'https://scontent.fdel1-1.fna.fbcdn.net/v/t1.0-1/c0.40.240.240/p240x240/11947414_1018768711498939_4136721693708499453_n.jpg?oh=8c27e0b7cc631e8db59eaccd0adefa36&oe=59F15710'
  },
  {
    id:3,
    name:'Aaradhya',
    username:'aaradhya.joshi.7',
    avatar:'https://scontent.fdel1-1.fna.fbcdn.net/v/t1.0-1/p240x240/16508720_10207774868639517_4124460968951623260_n.jpg?oh=ae5e05d7601285b33972df2c565919af&oe=59F51E84'
  },
  {
    id:4,
    name:'Vikas',
    username:'vikasupadhyay2',
    avatar:'https://scontent.fdel1-1.fna.fbcdn.net/v/t1.0-1/c92.0.240.240/p240x240/15871978_1330404760325015_4595115666811179534_n.jpg?oh=c27f348a92eea511d66e8e7b7614e790&oe=59C383C9'
  }
]);

@Injectable()
export class UserService {

  // get all users
  getUsers() {
    return usersPromise;
  }

  // find a specific user
  getUser(username) {
    return usersPromise.then(users => users.find(user => user.username === username));

    // let user = usersPromise.then(users => {
    //   return users.find(user => {
    //     return user.username === username;
    //   });
    // });

    // return user;
  }

}