import superagent from 'superagent';
import cookie from 'react-cookies';


let __API_URL__ = process.env.API_URL;
let API = 'http://localhost:3000/api/:model'

const create = blog => ({
  type: 'CREATE',
  payload: blog,
});

const update = blog => ({
  type: 'UPDATE',
  payload: blog,
});

const deleteAction = blog => ({
  type: 'DELETE',
  payload: blog,
});

const blogToken = () => {
  return cookie.load('blog');
};
console.log(__API_URL__)
export const blogCreate = payload => dispatch => {



  superagent.post(API)
    .set('Blog' + blogToken())
    .send(payload)
    .then( res => {
      dispatch(create(res.body));
      console.log(res);
    })
    .catch( error => {
      console.error(error.message);
    });
};


export const blogUpdate = payload => dispatch => {
  console.log('payload', payload);
  let URL =  `${API}/${payload._id}`;

  superagent.put(URL)
    .attach('avatar', payload.avatarFile)
    .then( res => {
      console.log('payload', payload);
      dispatch(update(res.body));
    })
    .catch( error => {
      console.error(error.message);
    })
};

export const blogDelete = payload => dispatch => {

  let URL = `${API}/${payload._id}`;

  superagent.delete(URL)
    .send(payload)
    .then( data => dispatch(deleteAction(data.body)))
    .catch(console.error);
};
